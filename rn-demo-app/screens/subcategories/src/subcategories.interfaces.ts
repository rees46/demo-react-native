import { RubricatorCategory } from '@globals/types'

export interface SubcategoriesProps {
  navigation: any
  route: {
    params: {
      categories: RubricatorCategory[]
    }
  }
}
