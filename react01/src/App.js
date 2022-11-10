import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
    return (
        <Wrapper>
            <Header />
            <Main choi="최승지" work="두부산책" />
            <Main choi="김승지" work="밥먹기" />
            <Main choi="이승지" work="춤추기" />
            <Main choi="박승지" />
            <Footer />
        </Wrapper>
    )
}

export default App;


// 2022.07.26