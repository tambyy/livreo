"use client";

import { useDispatch } from "react-redux";
import DeliveryPersons from "./DeliveryPersons";
import { setDeliveryPerson } from "@/redux/delivery-person";

export default function Layout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full min-h-screen flex flex-row flex-1">
      <DeliveryPersons
        onDeliveryClick={(deliveryPerson) => {
          const newUrl = `/delivery-person/${deliveryPerson.id}`;
          window.history.pushState(
            { ...window.history.state, as: newUrl, url: newUrl },
            "",
            newUrl
          );
          dispatch(setDeliveryPerson(deliveryPerson));
        }}
      />
      {children}
    </div>
  );
}
