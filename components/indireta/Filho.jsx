export default function Filho(props) {
    console.log(props);
    return (
        <div>
            <h1>
                Filho
            </h1>
            <button onClick={props.funcao}>
                Click 1
            </button>
            <button onClick={() => props.funcao("Passei!")}>
                Click 2
            </button>
        </div>
    )
}