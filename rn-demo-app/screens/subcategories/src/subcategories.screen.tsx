import React                  from 'react'

import { RubricatorFragment } from '@fragments/rubricator'
import { ScreenLayout }       from '@fragments/screen-layout'

import { SubcategoriesProps } from './subcategories.interfaces'

const SubcategoriesScreen = ({ navigation, route }: SubcategoriesProps) => {
  const { categories } = route.params

  return (
    <ScreenLayout
      navigation={navigation}
      menuVariant='navigation'
      navigationIconName='back'
      scrollable={false}
    >
      <RubricatorFragment navigation={navigation} loading={false} categories={categories} />
    </ScreenLayout>
  )
}

export default SubcategoriesScreen
