// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
   production: false,
   firebase: {
    apiKey: "AIzaSyCl6cLeG_jc0sqfK6EH7RulU4ZS1gbsSw0",
    authDomain: "app-grado.firebaseapp.com",
    projectId: "app-grado",
    storageBucket: "app-grado.appspot.com",
    messagingSenderId: "482724701067",
    appId: "1:482724701067:web:ec305a7f54538c0d27858e",
    measurementId: "G-G1YCV2VS1V"
   }
  
};

// Initialize Firebase


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
