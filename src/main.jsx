import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import i18n from './utils/lang-bank';
import store from './utils/store';
import MyRoutes from './MyRoutes';

const Home = lazy(() => import('./pages/Home'));


const rootElement = document.getElementById('root');
const renderApp = () => {

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <MyRoutes Home={<Home />} />
        </Provider>
      </I18nextProvider>
    </React.StrictMode>
  );
};

renderApp();

