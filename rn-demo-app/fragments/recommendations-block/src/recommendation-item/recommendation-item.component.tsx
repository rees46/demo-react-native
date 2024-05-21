import React                       from 'react'
import { memo }             from 'react'
import { Image }                   from 'react-native'

import { Text }             from 'react-native'

import { View }       from 'react-native'

import { RecommendationItemProps } from './recommendation-item.interfaces'
import { styles }                  from './recommendation-item.styles'

export const RecommendationItem = memo(
  ({ item }: RecommendationItemProps) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  ),
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id
)
