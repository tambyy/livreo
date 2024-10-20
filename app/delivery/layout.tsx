"use client";

import Deliveries from "./Deliveries";
import { setDelivery } from "@/redux/delivery";
import { useDispatch } from "react-redux";

export default function Layout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full min-h-screen flex flex-row flex-1">
      <Deliveries
        onDeliveryClick={(delivery) => {
          const newUrl = `/delivery/${delivery.id}`;
          window.history.pushState(
            { ...window.history.state, as: newUrl, url: newUrl },
            "",
            newUrl
          );
          dispatch(setDelivery(delivery));
        }}
      />
      {children}
    </div>
  );
}
