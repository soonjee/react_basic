const Main = ({ choi, work }) => {
    return (
        <main>
            {choi}는 {work}를 즐겨합니다.
        </main>
    )
}
//전달받은 값이 없을때 기본으로 전해주는 값
Main.defaultProps = {
    work: '밥먹기'
}
export default Main;