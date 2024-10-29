"use client";

import { ReactNode, useMemo } from "react";
import TimeSlot from "./TimeSlot";

export default function TimeColumn({
  fromHour,
  toHour,
  cellHeight,
  renderTimeHeader,
  renderTime,
}: {
  fromHour: number;
  toHour: number;
  cellHeight: number;
  renderTimeHeader?: ReactNode;
  renderTime?: (hour: number, minute: number) => React.ReactNode;
}) {
  /**
   * List of time cells
   * for calendar display
   */
  const timeCells = useMemo(() => {
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
  }, [fromHour, toHour]);

  return (
    <div className="flex flex-col sticky left-0 z-20">
      {/* Header */}
      <div className="w-full sticky top-0 z-10 border-b border-r border-gray-300">
        {renderTimeHeader ? (
          renderTimeHeader
        ) : (
          <div className="w-full h-8 bg-white"></div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1">
        {timeCells.map((timeCell) => (
          <TimeSlot
            key={`${timeCell.hour}:${timeCell.minute}`}
            hour={timeCell.hour}
            minute={timeCell.minute}
            cellHeight={cellHeight}
            renderTime={renderTime}
          />
        ))}
      </div>
    </div>
  );
}
