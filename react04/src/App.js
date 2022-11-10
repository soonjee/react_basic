import Hearder from "./Hearder";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  const monga = '먼가...';
  const DATA = [
    { id: 1, name: '최승지' },
    { id: 2, name: '김승지' },
    { id: 3, name: '이승지' },
    { id: 4, name: '장승지' },
  ]
  return (
    <>
      <Header monga={monga} number={DATA} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
