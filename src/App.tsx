import NavBar from '@components/NavBar';
import InputArea from '@components/InputArea';

function App() {
  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-blue_gray">
      <div className="flex flex-col w-[375px] h-[812px] rounded-3xl shadow-2xl bg-white">
        <NavBar />
        <div className="flex-1">message list</div>
        <InputArea />
      </div>
    </div>
  );
}

export default App;
