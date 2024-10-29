"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Column from "./Column";
import { flushSync } from "react-dom";
import TimeColumn from "./TimeColumn";

export default function Agenda({
  date = new Date(),
  dateItems,
  itemKey,
  itemDuration = () => 0,
  itemStart = () => 0,
  renderHeader,
  renderTime,
  renderTimeHeader,
  renderCell,
  renderItem,
  scrollThreshold = 200,
  list = false,
  fromHour = 8,
  toHour = 20,
  cellHeight = 24,
  columnWidth = 280,
  onDatesChanged,
  onDropItem,
}: {
  /**
   * Current agenda date
   */
  date?: Date;
  /**
   * Function that return a list of items
   * that belong to a given date in param
   *
   * @param date date
   */
  dateItems: (date: Date) => any[];
  /**
   * Function that return the unique key
   * for a given item in param
   *
   * @param item item
   */
  itemKey: (item: any) => number | string;
  /**
   * Function that return the duration in minutes
   * for a given item in param
   *
   * @param item item
   */
  itemDuration?: (item: any) => number;
  /**
   * Function that return the start in minutes
   * from 00:00 hour
   * of a given item in param
   *
   * @param item item
   */
  itemStart?: (item: any) => number;
  /**
   * Function that defines how to render the
   * header of each column for each date given in param
   *
   * @param date date
   */
  renderHeader?: (date: Date) => React.ReactNode;
  /**
   * Function that defines how to render the
   * time slot in the left for each given time(hour, minute)
   *
   * @param hour hour
   * @param minute minute
   */
  renderTime?: (hour: number, minute: number) => React.ReactNode;
  /**
   * Defines how to render the time slot header
   */
  renderTimeHeader?: React.ReactNode;
  /**
   * Function that defines how to render each cell
   * for each column of date
   *
   * @param date date
   * @param hour hour
   * @param minute minute
   * @param dragStart an item is being dragged inside of the column
   */
  renderCell?: (
    date: Date,
    hour: number,
    minute: number,
    dragStart: boolean
  ) => React.ReactNode;
  /**
   * Function that defines how to render each item
   *
   * @param item item
   * @param zIndex if there are many items superposed with the item, it give the the z index of the current item in this superposition
   */
  renderItem: (item: any, zIndex: number) => React.ReactNode;
  /**
   * When scrolling horizontally,
   * this indicate, at how many pixels from the left or right
   * we should append dates from the left or right
   */
  scrollThreshold?: number;
  /**
   * If false,
   * we display each column of the agenda as a calendar, with time slot
   * else
   * we display each column as just a list of items
   */
  list?: boolean;
  /**
   * For calendar display,
   * hour from which time slots begin
   */
  fromHour?: number;
  /**
   * For calendar display,
   * hour to which time slots end
   */
  toHour?: number;
  /**
   * For calendar display,
   * height of each column cell
   */
  cellHeight?: number;
  /**
   * Width of each column
   */
  columnWidth?: number;
  /**
   * Callback to call when dates(from and to) are updated
   */
  onDatesChanged?: (from: Date, to: Date) => void;
  /**
   * Callback to call when item is dropped inside of a cell(date, hour, minute)
   */
  onDropItem: (date: Date, hour: number, minute: number, item: any) => void;
}) {
  // From date
  const [from, setFrom] = useState<Date>(() => {
    const fromDate = new Date(date);
    fromDate.setDate(fromDate.getDate() - 7);
    return fromDate;
  });
  // To date
  const [to, setTo] = useState<Date>(() => {
    const toDate = new Date(date);
    toDate.setDate(toDate.getDate() + 7);
    return toDate;
  });

  // Dragged item
  const [draggedItem, setDraggedItem] = useState<any>(null);

  /**
   * List of dates
   */
  const dates = useMemo(() => {
    const dates = [];
    const currentDate = new Date(from);

    while (currentDate <= to) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }, [from, to]);

  // Container ref
  const containerRef = useRef<HTMLDivElement | null>(null);
  // List ref
  const listRef = useRef<HTMLDivElement | null>(null);

  /**
   * Unshift dates
   * into the Agenda
   *
   * @param count count of dates to unshift
   */
  function unshiftDates(count: number) {
    if (!containerRef.current || !listRef.current) {
      return;
    }

    const listWidth = listRef.current.getBoundingClientRect().width;

    const fromDate = new Date(from);
    fromDate.setDate(fromDate.getDate() - count);

    const toDate = new Date(to);
    toDate.setDate(toDate.getDate() - count);

    if (onDatesChanged) {
      onDatesChanged(from, toDate);
    }

    flushSync(() => {
      setFrom(fromDate);
    });

    containerRef.current.scrollLeft +=
      listRef.current.getBoundingClientRect().width - listWidth;

    flushSync(() => {
      setTo(toDate);
    });
  }

  /**
   * Push dates
   * into the Agenda
   *
   * @param count count of dates to push
   */
  function pushDates(count: number) {
    if (!containerRef.current || !listRef.current) {
      return;
    }

    const fromDate = new Date(from);
    fromDate.setDate(fromDate.getDate() + count);

    const toDate = new Date(to);
    toDate.setDate(toDate.getDate() + count);

    if (onDatesChanged) {
      onDatesChanged(from, toDate);
    }

    flushSync(() => {
      setTo(toDate);
    });

    const listWidth = listRef.current.getBoundingClientRect().width;
    const scrollLeft = containerRef.current.scrollLeft;

    flushSync(() => {
      setFrom(fromDate);
    });

    containerRef.current.scrollLeft =
      scrollLeft - listWidth + listRef.current.getBoundingClientRect().width;
  }

  /**
   * Handle agenda scroll
   * @param e
   */
  function handleScroll(e) {
    const container = e.target;
    if (container.scrollLeft <= scrollThreshold) {
      unshiftDates(5);
    } else if (
      listRef.current &&
      container.scrollLeft >=
        listRef.current.getBoundingClientRect().width -
          container.getBoundingClientRect().width -
          scrollThreshold
    ) {
      pushDates(5);
    }
  }

  useEffect(() => {
    /**
     * Center scroll
     */
    const centerScroll = () => {
      if (!containerRef.current || !listRef.current) {
        return;
      }

      containerRef.current.scrollLeft =
        (listRef.current.getBoundingClientRect().width -
          containerRef.current.getBoundingClientRect().width) /
        2;
    };

    centerScroll();
  }, []);

  useEffect(() => {
    const datesChanged = () => {
      if (onDatesChanged) {
        onDatesChanged(from, to);
      }
    };

    datesChanged();
  }, [onDatesChanged]);

  return (
    <div
      className={`w-full h-full flex flex-row flex-1 overflow-x-auto items-start group ${
        list ? "" : "calendar"
      } ${Boolean(draggedItem) ? "dragging-item" : ""}`}
      onScroll={handleScroll}
      ref={containerRef}
    >
      {!list && (
        <TimeColumn
          renderTimeHeader={renderTimeHeader}
          renderTime={renderTime}
          fromHour={fromHour}
          toHour={toHour}
          cellHeight={cellHeight}
        />
      )}

      <div
        className={`${
          list ? "h-full" : "h-auto"
        } flex flex-row bg-white relative items-start`}
        ref={listRef}
      >
        {dates.map((date) => (
          <Column
            key={date.toISOString().substring(0, 10)}
            list={list}
            date={date}
            dateItems={dateItems}
            itemKey={itemKey}
            itemDuration={itemDuration}
            itemStart={itemStart}
            renderHeader={renderHeader}
            renderCell={renderCell}
            renderItem={renderItem}
            onDropItem={(
              date: Date,
              hour: number,
              minute: number,
              item: any
            ) => {
              onDropItem(date, hour, minute, item);
              setDraggedItem(null);
            }}
            onDragItem={(item) => {
              setTimeout(() => {
                setDraggedItem(item);
              }, 0);
            }}
            fromHour={fromHour}
            toHour={toHour}
            cellHeight={cellHeight}
            columnWidth={columnWidth}
            draggedItem={draggedItem}
          />
        ))}
      </div>
    </div>
  );
}
