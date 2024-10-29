import UserType from "@/types/user";
import Map from "@/components/google/map/Map";

export default function MapZone({
  deliveryPerson,
}: {
  deliveryPerson: UserType;
}) {
  return (
    <div className="w-full flex-1 bg-white flex flex-col">
      <div className="w-full bg-white flex flex-row pl-3 pr-2 py-2">
        <span className="text-sm font-bold flex-1">Zone de livraison</span>
        <div className="w-6 h-full flex flex-col justify-center items-center text-xl text-purple font-bold">
          +
        </div>
      </div>
      <div className="flex-1 bg-slate-100 overflow-hidden">
        <Map
          apiKey=""
          options={{
            center: { lat: -18.8971, lng: 47.5452 },
            zoom: 14,
            fullscreenControl: false,
            disableDefaultUI: true,
          }}
        ></Map>
      </div>
    </div>
  );
}
