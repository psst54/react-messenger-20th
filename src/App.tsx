import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main';
import ChatPage from './pages/chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
]);

function App() {
  return (
    <div className="flex items-center justify-center w-dvw h-svh bg-blue_gray">
      <div
        className="flex flex-col
        w-375px h-svh max-h-812px bg-white
        rounded-3xl shadow-2xl"
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
