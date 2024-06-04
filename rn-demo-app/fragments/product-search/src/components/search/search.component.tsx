import React                from 'react'
import Icon                 from 'react-native-vector-icons/Ionicons'
import { TextInput }        from 'react-native'
import { TouchableOpacity } from 'react-native'
import { forwardRef }       from 'react'

import { Input }            from '@ui/input'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Spacer }           from '@ui/spacer'
import { useTheme }         from '@ui/theme'

import { SEARCH_HEIGHT }    from '../../product-search.constants'
import { SearchProps }      from './search.interfaces'

export const SearchComponent = forwardRef<TextInput, SearchProps>(({ onClose, ...props }, ref) => {
  const theme = useTheme()

  return (
    <Row>
      <Input ref={ref} {...props} />
      <Spacer space={12} />
      <TouchableOpacity onPress={onClose}>
        <Box width={24} height={SEARCH_HEIGHT} justifyContent='center' alignItems='center'>
          <Icon name='close' size={24} color={theme.colors.gray} />
        </Box>
      </TouchableOpacity>
    </Row>
  )
})
