import ClientType from "./client";
import ProductType from "./product";
import UserType from "./user";
import VehicleType from "./vehicle";

export default interface DeliveryType {
  id: number;
  deliver_at?: string;
  status?: string | null;
  comment?: string | null;
  price?: number;
  commission?: number;
  location?: string;
  latitude?: number;
  longitude?: number;

  product_id?: number | null;
  client_id?: number | null;
  delivery_person_id?: number | null;
  vehicle_id?: number | null;
  creator_id?: number | null;

  product?: ProductType | null;
  client?: ClientType | null;
  delivery_person?: UserType | null;
  vehicle?: VehicleType | null;
  creator?: UserType | null;
}
