"use client";

import statuses from "@/constants/statuses";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import deliveries from "@/constants/deliveries";

export default function Statuses() {
  return (
    <div className="w-full p-2 flex flex-col border-b border-b-slate-200">
      {statuses.map((status) => (
        <Menu
          key={status.key}
          menu={{
            ...status,
            route: "/",
            count: deliveries.filter(
              (delivery) => delivery.status === status.key
            ).length,
          }}
        />
      ))}
    </div>
  );
}
