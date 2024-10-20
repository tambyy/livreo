import vehicleTypes from "@/constants/vehicle-types";
import VehicleType from "@/types/vehicle";

export default function Vehicle({ vehicle }: { vehicle: VehicleType }) {
  const vehicleType = vehicleTypes.find(
    (vehicleTypes) => vehicleTypes.key == vehicle.type
  );

  return (
    <div className="w-full flex flex-row p-5 gap-3 bg-background rounded-lg items-center">
      {/* Image */}
      <div className="w-24 h-24 bg-slate-100 rounded-lg"></div>

      {/* Company detail */}
      <div className="flex flex-col flex-1 gap-7">
        <span className="w-full text-foreground-2">Véhicule</span>
        <div className="flex flex-col flex-1 gap-2">
          <span className="w-full font-bold text-base">{vehicle.name}</span>
          <span className="w-full text-foreground-2 text-sm">
            {vehicleType?.name}
          </span>
        </div>
      </div>
    </div>
  );
}
