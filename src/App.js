import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Cart from './components/Cart';
import Homepage from './components/Homepage';
import store from './utils/store';
import { Provider } from 'react-redux';

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Homepage />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/cart",
        element : <Cart />
      },
    ],
  },
]);

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
