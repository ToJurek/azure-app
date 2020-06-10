// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherUrl: 'http://api.weatherapi.com/v1/current.json',
  weatherKey: 'f724661d1b7f4105977123324202004',
  currencyExchangeUrl: 'assets/mocks/eurofxref-daily.xml',
  currencyExchangeKey: '',
  stockUrl: 'https://finnhub.io/api/v1/quote',
  stockKey: 'brb37m7rh5rb7je2kg0g'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
