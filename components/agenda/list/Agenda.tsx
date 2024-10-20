"use client";

import { useEffect, useRef, useState } from "react";
import Column from "./Column";
import { flushSync } from "react-dom";

export default function Agenda({
  date = new Date(),
  dateItems,
  itemKey,
  renderHeader,
  renderItem,
  onDatesChanged,
  onDropItem,
  threshold = 50,
}: {
  date?: Date;
  dateItems: (date: any) => any[];
  itemKey: (item: any) => number | string;
  renderHeader: (date: any) => React.ReactNode;
  renderItem: (item: any) => React.ReactNode;
  onDatesChanged?: (from: Date, to: Date) => void;
  onDropItem?: (date: any, item: any) => void;
  threshold?: number;
}) {
  // From date
  const [from, setFrom] = useState<Date>(() => {
    const fromDate = new Date(date);
    fromDate.setDate(fromDate.getDate() - 5);
    return fromDate;
  });
  // To date
  const [to, setTo] = useState<Date>(() => {
    const toDate = new Date(date);
    toDate.setDate(toDate.getDate() + 5);
    return toDate;
  });

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

    const listWidth = listRef.current.getBoundingClientRect().width;
    const scrollLeft = containerRef.current.scrollLeft;

    flushSync(() => {
      setFrom(fromDate);
    });

    containerRef.current.scrollLeft =
      scrollLeft - listWidth + listRef.current.getBoundingClientRect().width;

    flushSync(() => {
      setTo(toDate);
    });
  };

  /**
   * Handle agenda scroll
   * @param e
   */
  const handleScroll = (e) => {
    const container = e.target;
    if (container.scrollLeft <= threshold) {
      unshiftDates(3);
    } else if (
      listRef.current &&
      container.scrollLeft >=
        listRef.current.getBoundingClientRect().width -
          container.getBoundingClientRect().width -
          threshold
    ) {
      pushDates(3);
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
      className="w-full h-full flex flex-row flex-1 overflow-x-auto"
      onScroll={handleScroll}
      ref={containerRef}
    >
      <div className="flex flex-row p-2 gap-0.5 bg-white" ref={listRef}>
        {dates.map((date) => (
          <Column
            key={date.toISOString().substring(0, 10)}
            date={date}
            dateItems={dateItems}
            itemKey={itemKey}
            renderHeader={renderHeader}
            renderItem={renderItem}
            onDropItem={onDropItem}
          />
        ))}
      </div>
    </div>
  );
}
