import React                  from 'react'

import { RubricatorFragment } from '@fragments/rubricator'
import { ScreenLayout }       from '@fragments/screen-layout'

import { SubcategoriesProps } from './subcategories.interfaces'
import {TextComponent} from "@ui/text";
import {Box, Row} from '@ui/layout';
import { Spacer } from '@ui/spacer';

const SubcategoriesScreen = ({ navigation, route }: SubcategoriesProps) => {
  const { categories, parentCategoryName } = route.params

  return (
    <ScreenLayout
      navigation={navigation}
      menuVariant='navigation'
      navigationIconName='back'
      scrollable={false}
    >
      <Box height={1} backgroundColor='lightGray' fullWidth />
      <Box>
        <Spacer height={16} />
        <Row>
          <Spacer space={16} />
          <TextComponent fontColor='black' fontSize='title' fontWeight='semibold'>{parentCategoryName}</TextComponent>
          <Spacer space={16} />
        </Row>
        <Spacer height={16} />
      </Box>
      <Box height={1} backgroundColor='lightGray' fullWidth />
      <Spacer height={16} />
      <RubricatorFragment navigation={navigation} loading={false} categories={categories} />
    </ScreenLayout>
  )
}

export default SubcategoriesScreen
