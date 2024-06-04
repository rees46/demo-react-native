jest.mock('react-native-localize', () => {
    return {
        getLocales: jest.fn().mockReturnValue([{ countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false }]),
        getNumberFormatSettings: jest.fn().mockReturnValue({
            decimalSeparator: '.',
            groupingSeparator: ',',
        }),
        getCalendar: jest.fn().mockReturnValue('gregorian'),
        getCountry: jest.fn().mockReturnValue('US'),
        getCurrencies: jest.fn().mockReturnValue(['USD']),
        getTemperatureUnit: jest.fn().mockReturnValue('celsius'),
        getTimeZone: jest.fn().mockReturnValue('America/New_York'),
        uses24HourClock: jest.fn().mockReturnValue(true),
        usesMetricSystem: jest.fn().mockReturnValue(true),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    };
});
