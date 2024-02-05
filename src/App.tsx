import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-blue-950 font-bold bg-gray-300">
          Hello world
        </h1>
      </div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
