import React                  from 'react'
import { useState }           from 'react'
import { useEffect }          from 'react'

import { RubricatorFragment } from '@fragments/rubricator'
import { ScreenLayout }       from '@fragments/screen-layout'
import { SHOP_ID }            from '@globals/constants'
import { SHOP_SECRET }        from '@globals/constants'
import { RubricatorCategory } from '@globals/types'
import { useApi }             from '@globals/api-service'
import { useSDK }             from '@stores/rn-sdk'

import { CatalogProps }       from './catalog.interfaces'

const CatalogScreen = ({ navigation }: CatalogProps) => {
  const sdk = useSDK()
  const { publicApi } = useApi()
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<RubricatorCategory[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await publicApi.get('/products/categories', {
          params: {
            shop_id: SHOP_ID,
            shop_secret: SHOP_SECRET,
          },
        })
        setCategories(response.data)
        setLoading(false)
      } catch (e) {
        console.error('Failed to fetch product ', e)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    sdk.track('wish', [])
  }, [sdk])

  return (
    <ScreenLayout
      navigation={navigation}
      menuVariant='navigation'
      navigationIconName='home'
      scrollable={false}
    >
      <RubricatorFragment navigation={navigation} loading={loading} categories={categories} />
    </ScreenLayout>
  )
}

export default CatalogScreen
