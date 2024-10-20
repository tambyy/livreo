"use client";

import StatusType from "@/types/status";
import Image from "next/image";

export default function StatusHeader({
  status,
  count,
}: {
  status: StatusType;
  count: number;
}) {
  return (
    <div className="w-full h-9 flex flex-row items-center px-2 py-1.5 gap-2 bg-white rounded">
      <div className="w-5 h-5 flex flex-col justify-center items-center border border-dashed border-gray-500 rounded-full">
        <Image
          src={status.icon}
          alt={status.name}
          width={14}
          height={14}
          priority
        />
      </div>
      <span className="flex-1 text-xs font-bold">{status.name}</span>
      <div className="text-base text-purple font-bold">{count}</div>
      <div className="w-6 h-6 flex flex-col justify-center items-center text-xl text-purple font-bold border border-dashed border-purple rounded-sm">
        +
      </div>
    </div>
  );
}
