function Header(props) {
    return (
        <ul>
            {props.monga}
            {/* <li>{props.member[0].neme}</li>
            <li>{props.member[1].neme}</li>
            <li>{props.member[2].neme}</li>
            <li>{props.member[3].neme}</li> */}
            {props.member.map(el => <li key={el.id}>{el.name}</li>)}
        </ul>
    );
}

export default Header;