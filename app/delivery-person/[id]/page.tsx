"use client";

import deliveryPersons from "@/constants/delivery-persons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import { setDeliveryPerson } from "@/redux/delivery-person";
import Header from "./(show)/Header";
import Body from "./(show)/Body";

export default function DeliveryPerson() {
  const deliveryPerson = useSelector(
    (state: RootState) => state.deliveryPerson.deliveryPerson
  );

  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const deliveryPersonId = Number(id);

  useEffect(() => {
    const d = deliveryPersons.find(
      (deliveryPerson) => deliveryPerson.id == deliveryPersonId
    );

    dispatch(setDeliveryPerson(d));
  }, [dispatch, deliveryPersonId]);

  if (!deliveryPerson) {
    return null;
  }

  return (
    <div className="w-full h-full flex-1 flex flex-col bg-gray-100">
      {/* Header */}
      <Header deliveryPerson={deliveryPerson} />

      <div className="w-full gap-2 flex-1 flex flex-col overflow-hidden">
        {/* Body */}
        <Body deliveryPerson={deliveryPerson} />
      </div>
    </div>
  );
}
