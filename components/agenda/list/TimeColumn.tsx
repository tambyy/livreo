"use client";

import { ReactNode } from "react";
import TimeSlot from "./TimeSlot";

export default function TimeColumn({
  fromHour,
  toHour,
  cellHeight,
  renderTimeHeader,
}: {
  fromHour: number;
  toHour: number;
  cellHeight: number;
  renderTimeHeader: ReactNode;
}) {
  /**
   * List of time cells
   * for calendar display
   */
  const timeCells = (() => {
    const tc = [];
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

  return (
    <div className="flex flex-col w-11 sticky left-0 z-20">
      {/* Header */}
      <div className="w-full sticky top-0 z-10 border-b border-r border-gray-300">
        {renderTimeHeader}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1">
        {timeCells.map((timeCell) => (
          <TimeSlot
            key={`${timeCell.hour}:${timeCell.minute}`}
            hour={timeCell.hour}
            minute={timeCell.minute}
            cellHeight={cellHeight}
          />
        ))}
      </div>
    </div>
  );
}
