"use client";

import { useState } from "react";
import Item from "./Item";

export default function Column({
  date,
  dateItems,
  itemKey,
  renderHeader,
  renderItem,
  onDropItem,
}: {
  date: any;
  dateItems: (date: any) => any[];
  itemKey: (item: any) => number | string;
  renderHeader: (date: any) => React.ReactNode;
  renderItem: (item: any) => React.ReactNode;
  onDropItem?: (date: any, item: any) => void;
}) {
  const [dragStart, setDragStart] = useState(false);

  const startDrop = (e) => {
    e.preventDefault();
    setDragStart(true);
  };

  const endDrop = (e) => {
    setDragStart(false);
  };

  const onDrop = (e) => {
    endDrop(e);
    const item = e.dataTransfer.getData("item");

    if (item && onDropItem) {
      onDropItem(date, JSON.parse(item));
    }
  };

  return (
    <div
      className={`group date flex flex-col p-1 gap-0.5 w-64 ${
        dragStart ? "bg-gray-200 drop" : "bg-gray-100"
      }`}
      onDrop={onDrop}
      onDragOver={startDrop}
      onDragLeave={endDrop}
    >
      {/* Header */}
      <div className="w-full">{renderHeader(date)}</div>

      {/* Body */}
      <div className="flex flex-col gap-1 overflow-hidden hover:overflow-auto">
        {dateItems(date).map((item) => (
          <Item key={itemKey(item)} item={item} renderItem={renderItem} />
        ))}
      </div>
    </div>
  );
}
