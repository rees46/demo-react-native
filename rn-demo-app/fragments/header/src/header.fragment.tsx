import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Spacer }        from '@ui/spacer'

import React             from 'react'
import { StatusBar }     from 'react-native'
import { SafeAreaView }  from 'react-native'

import { LogoIcon }      from '@ui/icons'
import { TextComponent } from '@ui/text'
import { useTheme }      from '@ui/theme'

export const HeaderFragment = () => {
  const theme = useTheme()

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.black} />
      <Box backgroundColor='black' alignItems='center' justifyContent='center'>
        <Spacer space={11} />
        <Row alignItems='center' justifyContent='space-between'>
          <LogoIcon width={26} height={29} />
          <Spacer space={10} />
          <TextComponent fontColor='white'>DEMO</TextComponent>
          <TextComponent fontColor='white' fontWeight='bold'>
            STORE
          </TextComponent>
        </Row>
        <Spacer space={11} />
      </Box>
    </SafeAreaView>
  )
}
