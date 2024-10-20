"use client";

import Calendar from "@/components/agenda/list/Agenda";
import deliveries from "@/constants/deliveries";
import Delivery from "./Delivery";
import DeliveryType from "@/types/delivery";
import StatusType from "@/types/status";
import { useState } from "react";
import DateHeader from "./DateHeader";

export default function Agenda() {
  const [deliveryItems, setDeliveryItems] =
    useState<DeliveryType[]>(deliveries);

  return (
    <Calendar
      dateItems={(date: Date) =>
        deliveryItems
          .filter(
            (delivery: DeliveryType) =>
              delivery.deliver_at == date.toISOString().substring(0, 10)
          )
          .sort((d1, d2) =>
            d1.deliver_at && d2.deliver_at && d1.deliver_at < d2.deliver_at
              ? -1
              : 1
          )
      }
      itemKey={(delivery: DeliveryType) => delivery.id}
      renderHeader={(date: Date) => (
        <DateHeader
          date={date}
          count={
            deliveryItems.filter(
              (delivery: DeliveryType) =>
                delivery.deliver_at == date.toISOString().substring(0, 10)
            ).length
          }
        />
      )}
      renderItem={(delivery: DeliveryType) => (
        <Delivery key={delivery.id} delivery={delivery} />
      )}
      onDropItem={(date, delivery: DeliveryType) => {
        setDeliveryItems(
          deliveryItems.map((d) =>
            d.id == delivery.id
              ? { ...d, deliver_at: date.toISOString().substring(0, 10) }
              : d
          )
        );
      }}
    />
  );
}
