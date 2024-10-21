"use client";

import { useState } from "react";
import Item from "./Item";
import TimeCell from "./TimeCell";

export default function Column({
  date,
  list,
  dateItems,
  itemKey,
  itemDuration,
  itemStart,
  renderHeader,
  renderItem,
  onDropItem,
  onDragItem,
  fromHour,
  toHour,
  cellHeight,
}: {
  date: any;
  list: boolean;
  dateItems: (date: any) => any[];
  itemKey: (item: any) => number | string;
  itemStart: (item: any) => number;
  itemDuration: (item: any) => number;
  renderHeader: (date: any) => React.ReactNode;
  renderItem: (item: any) => React.ReactNode;
  onDropItem: (date: Date, hour: number, minute: number, item: any) => void;
  onDragItem: (item: any) => void;
  fromHour: number;
  toHour: number;
  cellHeight: number;
}) {
  const [dragStart, setDragStart] = useState(false);

  /**
   * List of events
   * to display in the calendar
   */
  const items = dateItems(date).map((item) => ({
    item,
    zIndex: 0,
  }));
  items.forEach((item, j) => {
    item.zIndex = 0;

    for (let i = j - 1; i >= 0; --i) {
      const prevItem = items[i];

      if (
        itemStart(item.item) <
        itemStart(prevItem.item) + itemDuration(prevItem.item)
      ) {
        item.zIndex = prevItem.zIndex + 1;
        break;
      }
    }
  });

  const today =
    new Date().toISOString().substring(0, 10) ==
    date.toISOString().substring(0, 10);
  const weekEnd = date.getDay() == 0 || date.getDay() == 6;

  /**
   * List of time cells
   * for calendar display
   */
  const timeCells = list
    ? []
    : (() => {
        let tc = [];
        for (let i = fromHour; i < toHour; ++i) {
          for (let j = 0; j < 4; ++j) {
            tc.push({
              hour: i,
              minute: j * 15,
            });
          }
        }

        return tc;
      })();

  const startDrop = (e) => {
    if (!list) {
      return;
    }

    e.preventDefault();
    setDragStart(true);
  };

  const endDrop = (e) => {
    if (!list) {
      return;
    }

    setDragStart(false);
  };

  const onDrop = (e) => {
    if (!list) {
      return;
    }

    endDrop(e);
    const item = e.dataTransfer.getData("item");

    if (item && onDropItem) {
      onDropItem(date, JSON.parse(item));
    }
  };

  return (
    <div
      className={`group date flex flex-col w-64 ${
        dragStart ? "bg-gray-200 drop" : "bg-gray-100"
      } ${today ? "bg-amber-50" : weekEnd ? "bg-gray-50" : "bg-white"}`}
      onDrop={onDrop}
      onDragOver={startDrop}
      onDragLeave={endDrop}
    >
      {/* Header */}
      <div className="w-full sticky top-0 z-10 border-b border-r border-gray-300">
        {renderHeader(date)}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 relative">
        {!list && (
          <div className="w-full h-full flex flex-col hover:overflow-auto group-[.calendar]:overflow-visible">
            {timeCells.map((timeCell) => (
              <TimeCell
                key={`${timeCell.hour}:${timeCell.minute}`}
                date={date}
                hour={timeCell.hour}
                minute={timeCell.minute}
                cellHeight={cellHeight}
                onDropItem={onDropItem}
              />
            ))}
          </div>
        )}
        <div
          className={`w-full h-full flex flex-col px-1 group-[.calendar]:absolute group-[.dragging-item]:pointer-events-none`}
        >
          <div
            className={`w-full h-full flex flex-col gap-1 relative overflow-hidden hover:overflow-auto group-[.calendar]:overflow-visible`}
          >
            {items.map(({ item, zIndex }) => (
              <Item
                key={itemKey(item)}
                item={item}
                cellHeight={cellHeight}
                zIndex={zIndex}
                duration={itemDuration(item)}
                start={itemStart(item) - fromHour * 60}
                renderItem={renderItem}
                onDragItem={onDragItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
