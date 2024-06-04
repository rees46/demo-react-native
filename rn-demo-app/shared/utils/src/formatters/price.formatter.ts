export const priceFormatter = (value: string | undefined): string => {
  if (!value) return ''

  let result = ''

  if (value.includes('.')
  ) {
    const priceSplit = value.split('.')

    const majors = priceSplit[0]
    result += majors

    const minors = priceSplit[1]

    if (minors.length > 0) {
      if (minors !== '0' && minors !== '00') {
        result += minors.length > 1 ? `.${minors.slice(0, 2)}` : `.${minors}0`
      }
    }
  }

  return result
}
