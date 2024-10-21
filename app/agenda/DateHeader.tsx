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
      <span className="flex-1 text-xs font-semibold">
        {dayjs(date).format("dddd, MMMM D YYYY")}
      </span>
      <div className="text-base text-purple font-bold">{count}</div>
      <div className="w-6 h-full flex flex-col justify-center items-center text-xl text-purple font-bold border border-dashed border-purple rounded-sm">
        +
      </div>
    </div>
  );
}
