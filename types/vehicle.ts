import UserType from "./user";

export default interface VehicleType {
  id: number;
  name: string;
  type: string;
  thumbnail?: string;

  creator_id?: number | null;

  creator?: UserType | null;
}
