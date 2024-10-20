"use client";

import deliveries from "../../../constants/deliveries";
import { useDispatch, useSelector } from "react-redux";
import { setDelivery } from "@/redux/delivery";
import { useEffect } from "react";
import DeliveryDetail from "../DeliveryDetail";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";

export default function Delivery() {
  const delivery = useSelector((state: RootState) => state.delivery);

  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const deliveryId = Number(id);

  useEffect(() => {
    const d = deliveries.find((delivery) => delivery.id == deliveryId);

    dispatch(setDelivery(d));
  }, [dispatch, deliveryId]);

  if (!delivery) {
    return null;
  }

  return <DeliveryDetail delivery={delivery} />;
}
