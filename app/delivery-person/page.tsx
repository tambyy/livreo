"use client";
import deliveryPersons from "@/constants/delivery-persons";
import { useRouter } from "next/navigation";

export default function Delivery() {
  const router = useRouter();

  if (deliveryPersons.length > 0) {
    router.push(`/delivery-person/${deliveryPersons[0].id}`);
  }

  return null;
}
