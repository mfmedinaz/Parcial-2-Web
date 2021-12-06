import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";

const messagesEn = {
  mySpaces:'My spaces',
  myRooms: 'My rooms',
  device: 'Device',
  value: 'Value',
  stats: 'Stats',
  powerUsage: 'Power usage (kwH) - Today'
}

const messagesEs = {
  mySpaces:'Mis espacios',
  myRooms: 'Mis habitaciones',
  device: 'Dispositivo',
  value: 'Valor',
  stats: 'Estadísticas',
  powerUsage: 'Consumo de energía (kwH) - Hoy'
}

function renderMessages()
{
  console.log("language", navigator.language);
  if(navigator.language === "es-419")
  {
    return messagesEs;
  }
  else{
    return messagesEn;
  }

}

ReactDOM.render(
  <IntlProvider locale={navigator.language} messages={renderMessages()}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
