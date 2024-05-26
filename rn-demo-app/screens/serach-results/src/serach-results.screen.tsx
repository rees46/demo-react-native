import React                    from 'react'
import { Dimensions }           from 'react-native'
import { useTranslation }       from 'react-i18next'

import { RecommendationsBlock } from '@fragments/recommendations-block'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Spacer }               from '@ui/spacer'
import { TextComponent }        from '@ui/text'

import { SearchResultsProps }   from './serach-results.interfaces'

const { height } = Dimensions.get('window')

const SearchResultsScreen = ({ navigation }: SearchResultsProps) => {
  const { t } = useTranslation()

  return (
    <Box backgroundColor='white' fullHeight flex={1}>
      <Box flexDirection='row' height={height - 80 - 370}>
        <Spacer space={16} />
        <Column>
          <Spacer height={16} />
          <TextComponent fontSize='semi'>
            {t('fragments.product-search.total_results', { total: 0 })}
          </TextComponent>
          <Box flex={1} justifyContent='center' alignItems='center'>
            <TextComponent fontSize='big' fontColor='gray' fontWeight='semibold'>
              {t('fragments.product-search.empty_results')}
            </TextComponent>
          </Box>
        </Column>
        <Spacer space={16} />
      </Box>
      <RecommendationsBlock
        navigation={navigation}
        // TODO: replace by necessary recommender
        recommenderCode='1efd76c810cc2364ff89677af3e076c7'
        titleVariant='title'
      />
    </Box>
  )
}

export default SearchResultsScreen
