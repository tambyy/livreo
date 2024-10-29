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
    <div className="flex" style={{ height: `${cellHeight}px` }}>
      {renderTime ? (
        renderTime(hour, minute)
      ) : (
        <div
          className={`w-11 h-full flex px-1 justify-center items-center bg-white border-b border-r border-r-gray-300 text-sm ${
            minute == 0
              ? "border-gray-100 font-semibold  border-dashed"
              : minute == 15
              ? "border-gray-100"
              : minute == 30
              ? "border-gray-100 border-dashed text-foreground-2"
              : "border-gray-300"
          }`}
        >
          {minute != 0 ? "" : (hour < 10 ? "0" : "") + hour}
        </div>
      )}
    </div>
  );
}
