"use client";

import dayjs from "dayjs";

export default function DateHeader({
  date,
  count,
}: {
  date: Date;
  count: number;
}) {
  return (
    <div className="w-full h-9 flex flex-row items-center px-2 py-1.5 gap-2 bg-white rounded">
      <span className="flex-1 text-xs font-medium">
        {dayjs(date).format("ddd, MMM D YYYY")}
      </span>
      <div className="text-sm text-purple font-semibold">
        {count ? count : ""}
      </div>
      <div className="w-6 h-full flex flex-col justify-center items-center text-xl text-purple font-bold">
        +
      </div>
    </div>
  );
}
