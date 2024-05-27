import React                  from 'react'
import Icon                   from 'react-native-vector-icons/Ionicons'
import { FlatList }           from 'react-native'
import { Pressable }          from 'react-native'
import { TouchableOpacity }   from 'react-native'
import { useCallback }        from 'react'

import { RubricatorCategory } from '@globals/types'
import { APP_ROUTES }         from '@navigations/constants'
import { Condition }          from '@ui/condition'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Spacer }             from '@ui/spacer'
import { TextComponent }      from '@ui/text'
import { useTheme }           from '@ui/theme'

import { getListHeight }      from './utils'

export const RubricatorFragment = ({ navigation, categories, loading }) => {
  const theme = useTheme()

  const handleCategoryPress = useCallback(
    (category: RubricatorCategory) => () => {
      if (category.children.length > 0)
        navigation.push(APP_ROUTES.SUBCATEGORIES.name, { categories: category.children, parentCategoryName: category.name })
    },
    [navigation]
  )

  if (loading) {
    return null
  }

  return (
    <Column>
      <Box height={getListHeight()}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Pressable onPress={handleCategoryPress(item)}>
              <Row>
                <Spacer space={16} />
                <Box height={48} justifyContent='center' flex={1}>
                  <Row justifyContent='space-between' flex={1}>
                    <TextComponent fontSize='big' fontWeight='medium' fontColor='black'>
                      {item.name?.toUpperCase() ?? ''}
                    </TextComponent>
                    <Condition condition={true}>
                      <TouchableOpacity>
                        <Icon name='chevron-forward' size={24} color={theme.colors.gray} />
                      </TouchableOpacity>
                    </Condition>
                  </Row>
                </Box>
                <Spacer space={16} />
              </Row>
            </Pressable>
          )}
          keyExtractor={({ id }) => id}
        />
      </Box>
    </Column>
  )
}
