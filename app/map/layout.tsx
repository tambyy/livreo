"use client";

import Map from "@/components/google/map/Map";
import deliveries from "@/constants/deliveries";
import Marker from "@/components/google/map/Marker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setDelivery } from "@/redux/delivery";
import Deliveries from "../delivery/Deliveries";

export default function Layout() {
  const delivery = useSelector((state: RootState) => state.delivery);
  const dispatch = useDispatch();
  const [center, setCenter] = useState({ lat: -18.91368, lng: 47.53613 });

  useEffect(() => {
    if (!delivery || !delivery.latitude || !delivery.longitude) {
      return;
    }

    setCenter({ lat: delivery.latitude, lng: delivery.longitude });
  }, [delivery]);

  return (
    <div className="w-full h-full flex flex-row flex-1">
      <Deliveries
        onDeliveryClick={(delivery) => {
          dispatch(setDelivery(delivery));
        }}
      />
      <div className="w-full h-full flex-1">
        <Map
          apiKey=""
          options={{
            zoom: 14,
            center: center,
            fullscreenControl: false,
            disableDefaultUI: true,
          }}
        >
          {deliveries
            .filter((delivery) => delivery.latitude && delivery.longitude)
            .map((delivery) => (
              <Marker
                key={delivery.id}
                options={{
                  position: { lat: delivery.latitude, lng: delivery.longitude },
                }}
              />
            ))}
        </Map>
      </div>
    </div>
  );
}
