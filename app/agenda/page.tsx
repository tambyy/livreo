"use client";

import Calendar from "@/components/agenda/list/Agenda";
import deliveries from "@/constants/deliveries";
import Delivery from "./Delivery";
import DeliveryType from "@/types/delivery";
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
              delivery.deliver_at?.substring(0, 10) ==
              date.toISOString().substring(0, 10)
          )
          .sort((d1, d2) =>
            d1.deliver_at && d2.deliver_at && d1.deliver_at < d2.deliver_at
              ? -1
              : 1
          )
      }
      itemKey={(delivery: DeliveryType) => delivery.id}
      itemStart={(delivery: DeliveryType) => {
        if (!delivery.deliver_at) {
          return 0;
        }

        const date = new Date(delivery.deliver_at);
        return date.getHours() * 60 + date.getMinutes();
      }}
      itemDuration={() => {
        return 60;
      }}
      renderHeader={(date: Date) => (
        <DateHeader
          date={date}
          count={
            deliveryItems.filter(
              (delivery: DeliveryType) =>
                delivery.deliver_at?.substring(0, 10) ==
                date.toISOString().substring(0, 10)
            ).length
          }
        />
      )}
      renderItem={(delivery: DeliveryType, zIndex: number) => (
        <Delivery key={delivery.id} delivery={delivery} zIndex={zIndex} />
      )}
      renderTimeHeader={<div className="w-full h-9 bg-white"></div>}
      onDropItem={(date, hour, minute, delivery: DeliveryType) => {
        setDeliveryItems(
          deliveryItems.map((d) =>
            d.id == delivery.id
              ? {
                  ...d,
                  deliver_at:
                    date.toISOString().substring(0, 10) +
                    " " +
                    (hour < 10 ? "0" : "") +
                    hour +
                    ":" +
                    (minute < 10 ? "0" : "") +
                    minute,
                }
              : d
          )
        );
      }}
      onDatesChanged={(from, to) => {
        console.log(
          from.toISOString().substring(0, 10),
          to.toISOString().substring(0, 10)
        );
      }}
    />
  );
}
