import { RubricatorCategory } from '@globals/types'

export interface SubcategoriesProps {
  navigation: any
  route: {
    params: {
      parentCategoryName: string,
      categories: RubricatorCategory[]
    }
  }
}
