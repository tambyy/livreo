import UserType from "./user";

export default interface ClientType {
  id: number;
  name: string;
  phone_number: string;
  location?: string;
  latitude?: number;
  longitude?: number;

  creator_id?: number | null;

  creator?: UserType | null;
}
