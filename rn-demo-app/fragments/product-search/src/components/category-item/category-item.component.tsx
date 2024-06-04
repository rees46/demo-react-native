import React                 from 'react'
import { TouchableOpacity }  from 'react-native'
import { useCallback }       from 'react'
import { memo }              from 'react'

import { Column }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Spacer }            from '@ui/spacer'
import { TextComponent }     from '@ui/text'

import { CategoryItemProps } from './category-item.interfaces'

export const CategoryItem = memo(({ item, onPress }: CategoryItemProps) => {
  const handleCategoryPress = useCallback(() => onPress?.(item.id), [item.id, onPress])

  return (
    <TouchableOpacity onPress={handleCategoryPress}>
      <Row>
        <Spacer space={16} />
        <Column>
          <Spacer height={8} />
          <TextComponent>{item.name}</TextComponent>
        </Column>
        <Spacer space={16} />
      </Row>
    </TouchableOpacity>
  )
})
