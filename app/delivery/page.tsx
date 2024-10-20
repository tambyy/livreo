"use client";

import deliveries from "@/constants/deliveries";
import { useRouter } from "next/navigation";

export default function Delivery() {
  const router = useRouter();

  if (deliveries.length > 0) {
    router.push(`/delivery/${deliveries[0].id}`);
  }

  return null;
}
