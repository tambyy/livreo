"use client";

import { useEffect, useRef, useState } from "react";
import Column from "./Column";
import { flushSync } from "react-dom";
import TimeColumn from "./TimeColumn";

export default function Agenda({
  date = new Date(),
  dateItems,
  itemKey,
  itemDuration = (item) => 0,
  itemStart = (item) => 0,
  renderHeader,
  renderItem,
  renderTimeHeader,
  onDatesChanged,
  onDropItem,
  scrollThreshold = 200,
  list = false,
  fromHour = 8,
  toHour = 20,
  cellHeight = 24,
}: {
  date?: Date;
  dateItems: (date: any) => any[];
  itemKey: (item: any) => number | string;
  itemDuration?: (item: any) => number;
  itemStart?: (item: any) => number;
  renderHeader: (date: any) => React.ReactNode;
  renderItem: (item: any) => React.ReactNode;
  renderTimeHeader: React.ReactNode;
  onDatesChanged?: (from: Date, to: Date) => void;
  onDropItem: (date: Date, hour: number, minute: number, item: any) => void;
  scrollThreshold?: number;
  list?: boolean;
  fromHour?: number;
  toHour?: number;
  cellHeight?: number;
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
  const dates = (() => {
    const dates = [];
    const currentDate = new Date(from);

    while (currentDate <= to) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  })();

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
  const unshiftDates = (count: number) => {
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
  };

  /**
   * Push dates
   * into the Agenda
   *
   * @param count count of dates to push
   */
  const pushDates = (count: number) => {
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
  };

  /**
   * Handle agenda scroll
   * @param e
   */
  const handleScroll = (e) => {
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
  };

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
          fromHour={fromHour}
          toHour={toHour}
          cellHeight={cellHeight}
        />
      )}
      <div
        className="h-auto flex flex-row bg-white relative items-start"
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
          />
        ))}
      </div>
    </div>
  );
}
