import React ,{Suspense}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetctor from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetctor)
  .use(HttpApi)
  .init({
    supportedLngs:['en','hi'],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui) 
    fallbackLng: "en",
    detection:{
      order:['htmlTag','cookie','localStorage','path','subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath:'/assets/locales/{{lng}}/translation.json'
    },

  });
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const loadingMarkup=(
  <div>
    <h2 color="Red">Red Rose Beauty Parlour, Rohtak</h2>
    </div>
)
root.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
