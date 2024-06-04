import React                from 'react'
import Icon                 from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import { useCallback }      from 'react'
import { useTranslation }   from 'react-i18next'

import { APP_ROUTES }       from '@navigations/constants'
import { Row }              from '@ui/layout'
import { Spacer }           from '@ui/spacer'
import { TextComponent }    from '@ui/text'
import { useTheme }         from '@ui/theme'

import { HeaderProps }      from './navigation-header.interfaces'

export const NavigationHeaderComponent = ({ navigation, variant }: HeaderProps) => {
  const theme = useTheme()
  const { t } = useTranslation()

  const handleClose = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const handleHomePress = useCallback(() => {
    navigation.navigate(APP_ROUTES.HOME.name)
  }, [navigation])

  return (
    <Row>
      <Spacer space={16} />
      <Row justifyContent='space-between' flex={1}>
        <TouchableOpacity onPress={variant === 'home' ? handleHomePress : handleClose}>
          <Row alignItems='center'>
            <Icon
              name={variant === 'home' ? 'home' : 'arrow-back'}
              size={24}
              color={theme.colors.black}
            />
            <Spacer space={32} />
            <TextComponent
              fontSize='smallTitle'
              lineHeight={1.5}
              fontWeight='medium'
              fontColor='black'
            >
              {t(`${variant === 'home' ? 'screens.home.title' : 'navigations.back'}`)}
            </TextComponent>
          </Row>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClose}>
          <Icon name='close' size={24} color={theme.colors.gray} />
        </TouchableOpacity>
      </Row>
      <Spacer space={16} />
    </Row>
  )
}
