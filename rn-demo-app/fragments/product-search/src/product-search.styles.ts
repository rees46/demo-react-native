import { Dimensions }             from 'react-native'

import { StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')
const TAB_BAR_HEIGHT = 50
const TAB_HEADER_HEIGHT = 80
const SEARCH_HEIGHT = 90

export const getStyles = (viewOnly: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      padding: 16,
      backgroundColor: 'white',
      flexGrow: 1,
      maxHeight: viewOnly ? SEARCH_HEIGHT : height - TAB_BAR_HEIGHT - TAB_HEADER_HEIGHT,
    },
    searchbar: {
      marginBottom: 16,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    categoriesList: {
      marginBottom: 16,
    },
    category: {
      fontSize: 16,
      color: 'blue',
      marginBottom: 4,
    },
    itemsList: {
      marginBottom: 16,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
    },
    itemName: {
      fontSize: 16,
    },
    itemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    totalResults: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 16,
    },
  })
