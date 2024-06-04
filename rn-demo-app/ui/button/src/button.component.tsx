import { memo }             from 'react'

import { useTheme }         from '@ui/theme'

import { ButtonProps }      from './button.interfaces'
import { getButtonVariants } from './ui-functions'

export const ButtonComponent = memo(({
  height = 44,
  variant = 'primary',
  flex = 1,
  ...props
}: ButtonProps) => {
  const theme = useTheme()

  return getButtonVariants({ height, theme, flex, ...props })[variant]
})
