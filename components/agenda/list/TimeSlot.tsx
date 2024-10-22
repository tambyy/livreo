"use client";

export default function TimeSlot({
  hour,
  minute,
  cellHeight,
  renderTime,
}: {
  hour: number;
  minute: number;
  cellHeight: number;
  renderTime?: (hour: number, minute: number) => React.ReactNode;
}) {
  return (
    <div className="w-full flex" style={{ height: `${cellHeight}px` }}>
      {renderTime ? (
        renderTime(hour, minute)
      ) : (
        <div
          className={`w-full h-full flex px-1 justify-end items-center bg-white border-b border-r border-r-gray-300 text-xs ${
            minute == 0
              ? "border-gray-200 font-semibold"
              : minute == 15
              ? "border-gray-200 border-dashed"
              : minute == 30
              ? "border-gray-200"
              : "border-gray-300"
          }`}
        >
          {(hour < 10 ? "0" : "") +
            hour +
            ":" +
            (minute < 10 ? "0" : "") +
            minute}
        </div>
      )}
    </div>
  );
}
