import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
