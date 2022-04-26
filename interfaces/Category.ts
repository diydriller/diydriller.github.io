import {SubCategory} from "@/interfaces/SubCategory";

export interface Category{
  name: string;
  icon: string;
  subCategoryMap : Map<string,number>;
}
