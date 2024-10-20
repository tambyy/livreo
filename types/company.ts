import UserType from "./user";

export default interface CompanyType {
  id: number;
  name: string;
  phone_number: string;
  thumbnail?: string;

  creator_id?: number | null;

  creator?: UserType | null;
}
