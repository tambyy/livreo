"use client";

import { useState } from "react";

export default function TimeCell({
  date,
  hour,
  minute,
  cellHeight,
  renderCell,
  onDropItem,
}: {
  date: Date;
  hour: number;
  minute: number;
  cellHeight: number;
  renderCell?: (
    date: Date,
    hour: number,
    minute: number,
    dragStart: boolean
  ) => React.ReactNode;
  onDropItem: (date: Date, hour: number, minute: number, item: any) => void;
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

    if (item) {
      onDropItem(date, hour, minute, JSON.parse(item));
    }
  };

  return (
    <div
      className="w-full"
      style={{ height: `${cellHeight}px` }}
      onDrop={onDrop}
      onDragOver={startDrop}
      onDragLeave={endDrop}
    >
      {renderCell ? (
        renderCell(date, hour, minute, dragStart)
      ) : (
        <div
          className={`w-full h-full border-b border-r border-r-gray-300 ${
            minute == 0
              ? "border-gray-100 font-semibold  border-dashed"
              : minute == 15
              ? "border-gray-100"
              : minute == 30
              ? "border-gray-100 border-dashed"
              : "border-gray-300"
          } ${dragStart ? "outline outline-gray-400 z-10" : "outline-none"}`}
        ></div>
      )}
    </div>
  );
}
