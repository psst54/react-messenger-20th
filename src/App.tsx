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
    <div className="flex items-center justify-center w-dvw h-dvh h-screen bg-blue_gray">
      <div
        className="flex flex-col
        w-dvw h-dvh h-screen bg-white
        sm:w-375px sm:max-h-812px sm:rounded-3xl sm:shadow-2xl"
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
