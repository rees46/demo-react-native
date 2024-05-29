import React                    from 'react'
import { memo }           from 'react'
import { useTranslation }       from 'react-i18next'

import { RecommendationsBlock } from '@fragments/recommendations-block'
import { Box }                   from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }      from '@ui/layout'
import { Spacer }               from '@ui/spacer'
import { TextComponent }        from '@ui/text'

import { EmptySearchProps }      from './empty-search.interfaces'

export const EmptySearchComponent = ({ navigation }: EmptySearchProps) => {
  const { t } = useTranslation()

  return (
    <Box justifyContent='space-between' flex={1}>
      <Row>
        <Spacer space={16} />
        <Column>
          <TextComponent fontSize='semi'>
            {t('fragments.product-search.total_results', { total: 0 })}
          </TextComponent>
          <Box height={150} justifyContent='center' alignItems='center'>
            <TextComponent fontSize='big' fontColor='gray' fontWeight='semibold'>
              {t('fragments.product-search.empty_results')}
            </TextComponent>
          </Box>
        </Column>
        <Spacer space={16} />
      </Row>
      <RecommendationsBlock
        navigation={navigation}
        // TODO: replace by necessary recommender
        recommenderCode='1efd76c810cc2364ff89677af3e076c7'
        titleVariant='title'
      />
    </Box>
  )
}
