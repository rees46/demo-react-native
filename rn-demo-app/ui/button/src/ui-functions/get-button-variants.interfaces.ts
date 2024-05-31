import { ThemeType }  from '@ui/theme'

import { ButtonProps } from '../button.interfaces'

export type GetButtonVariantsProps = Omit<ButtonProps, 'variant'> & { theme: ThemeType }
