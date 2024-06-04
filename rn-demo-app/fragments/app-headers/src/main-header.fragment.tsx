import React                        from 'react'
import { StatusBar }                from 'react-native'
import { SafeAreaView }             from 'react-native'
import { memo }                     from 'react'

import { APP_HEADER_HEIGHT_MEDIUM } from '@globals/constants'
import { LogoIcon }                 from '@ui/icons'
import { Box }                      from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Spacer }                   from '@ui/spacer'
import { TextComponent }            from '@ui/text'
import { useTheme }                 from '@ui/theme'

export const MainHeaderFragment = memo(() => {
  const theme = useTheme()

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.black} />
      <Box backgroundColor='black' justifyContent='center' height={APP_HEADER_HEIGHT_MEDIUM}>
        <Row alignItems='center' justifyContent='center'>
          <LogoIcon width={26} height={29} />
          <Spacer space={10} />
          <TextComponent fontColor='white'>DEMO</TextComponent>
          <TextComponent fontColor='white' fontWeight='bold'>
            STORE
          </TextComponent>
        </Row>
      </Box>
    </SafeAreaView>
  )
})
