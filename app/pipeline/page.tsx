"use client";

import Pipelines from "@/components/pipeline/Pipeline";
import deliveries from "@/constants/deliveries";
import statuses from "@/constants/statuses";
import Delivery from "./Delivery";
import StatusHeader from "./StatusHeader";
import DeliveryType from "@/types/delivery";
import StatusType from "@/types/status";
import { useState } from "react";

export default function Pipeline() {
  const [deliveryItems, setDeliveryItems] =
    useState<DeliveryType[]>(deliveries);

  return (
    <Pipelines
      pipelines={statuses}
      pipelineKey={(status: StatusType) => status.key}
      pipelineItems={(status: StatusType) =>
        deliveryItems
          .filter((delivery: DeliveryType) => delivery.status == status.key)
          .sort((d1, d2) =>
            d1.deliver_at && d2.deliver_at && d1.deliver_at < d2.deliver_at
              ? -1
              : 1
          )
      }
      itemKey={(delivery: DeliveryType) => delivery.id}
      renderHeader={(status: StatusType) => (
        <StatusHeader
          status={status}
          count={
            deliveryItems.filter(
              (delivery: DeliveryType) => delivery.status == status.key
            ).length
          }
        />
      )}
      renderItem={(delivery: DeliveryType) => (
        <Delivery key={delivery.id} delivery={delivery} />
      )}
      onDropItem={(status: StatusType, delivery: DeliveryType) => {
        setDeliveryItems(
          deliveryItems.map((d) =>
            d.id == delivery.id ? { ...d, status: status.key } : d
          )
        );
      }}
    />
  );
}
