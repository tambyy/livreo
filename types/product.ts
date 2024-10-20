import CompanyType from "./company";
import UserType from "./user";

export default interface ProductType {
  id: number;
  name: string;
  description?: string;
  price?: number;

  company_id?: number | null;
  creator_id?: number | null;

  company?: CompanyType | null;
  creator?: UserType | null;
}
