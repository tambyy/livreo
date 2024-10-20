import VehicleType from "./vehicle";

export default interface UserType {
  id: number;
  name: string;
  phone_number: string;
  commission?: number;
  location?: string;
  latitude?: number;
  longitude?: number;

  creator_id?: number | null;
  vehicle_id?: number | null;

  creator?: UserType | null;
  vehicle?: VehicleType | null;
}
