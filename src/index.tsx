import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux';
import App from './App';
import './styles/index.sass';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
