import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store/store';
import {App} from './App';
import './i18n';
import './index.css';
import {createTheme, ThemeProvider} from "@mui/material";
import getDesignTokens from "./utils/theme/theme";

const darkModeTheme = createTheme(getDesignTokens('dark'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Text loading can be replaced by some loading spinner*/}
        <Suspense fallback='loading'>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={darkModeTheme}>
                    <App/>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </Suspense>
    </React.StrictMode>
);
