export default function heroButton(props){
    return(
        <button onClick={props.link}>
            <h3>{props.account}</h3>
        </button>
    )
}