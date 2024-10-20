import Map from "@/components/google/map/Map";
import Marker from "@/components/google/map/Marker";
import DeliveryType from "@/types/delivery";

export default function Client({ delivery }: { delivery: DeliveryType }) {
  const position = {
    lat: delivery.latitude,
    lng: delivery.longitude,
  };

  return (
    <div className="h-48 flex-1 bg-slate-100 rounded-lg overflow-hidden">
      <Map
        apiKey=""
        options={{
          center: position,
          zoom: 14,
          fullscreenControl: false,
          disableDefaultUI: true,
        }}
      >
        <Marker
          options={{
            position: position,
          }}
        />
      </Map>
    </div>
  );
}
