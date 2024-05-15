import { CategoryType, ProductType } from "../product-search.interfaces";

interface UseProductSearchReturnedType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  items: ProductType[];
  categories: CategoryType[];
  totalResults: number;
}

export type UseProductSearchType = () => UseProductSearchReturnedType;
