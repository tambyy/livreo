"use client";

import deliveries from "../../../constants/deliveries";
import { useDispatch, useSelector } from "react-redux";
import { setDelivery } from "@/redux/delivery";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import Header from "./(show)/Header";
import Body from "./(show)/Body";

export default function Delivery() {
  const delivery = useSelector((state: RootState) => state.delivery.delivery);

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

  return (
    <div className="w-full h-full flex-1 flex flex-col bg-gray-100">
      <div className="w-full px-8 py-4 gap-4 flex flex-row border-b border-b-gray-300">
        <h2 className="font-extrabold text-3xl">Livraison</h2>
      </div>

      <div className="w-full h-full gap-2 flex-1 flex flex-col">
        {/* Header */}
        <Header delivery={delivery} />

        {/* Body */}
        <Body delivery={delivery} />
      </div>
    </div>
  );
}
