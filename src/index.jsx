import ReactDOM from 'react-dom/client';
import './index.css';
import App from './layout/App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

