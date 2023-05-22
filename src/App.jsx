import './styles/App.css';
import Home from './pages/Home/home'
import Contact from './pages/Contact/contact'
import About from './pages/About/about'
import Error from './pages/Error/error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter( [
    {
      path: '/',
      element: <Home/>
    },{
      path: '/contact',
      element: <Contact/>
    },{
      path: '/about',
      element: <About/>
    },{
      path: '*',
      element: <Error/>
    },
  ])

  return (
      <>
        <RouterProvider router={router}/>
      </>
  );
}

export default App;
