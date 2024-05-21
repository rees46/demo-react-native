import { CategoryType, ProductType } from '../product-search.interfaces';
import { Dispatch, SetStateAction } from 'react';

interface UseProductSearchReturnedType {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  items: ProductType[];
  categories: CategoryType[];
  totalResults: number;
}

export type UseProductSearchType = () => UseProductSearchReturnedType;
