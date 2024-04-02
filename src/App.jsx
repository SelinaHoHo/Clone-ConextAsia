import { useRoutes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import Not from './pages/NotFoundPage';

function App() {
  let Router = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <DetailPage /> },
    { path: '*', element: <Not /> },
  ]);

  return Router;
}

export default App;
