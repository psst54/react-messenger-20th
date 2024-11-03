import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main';
import ChatPage from './pages/chat';
import FollowerPage from './pages/follower';
import ChatListPage from './pages/chatList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/chat/:id',
    element: <ChatPage />,
  },
  {
    path: '/follower',
    element: <FollowerPage />,
  },
  {
    path: '/chat',
    element: <ChatListPage />,
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
