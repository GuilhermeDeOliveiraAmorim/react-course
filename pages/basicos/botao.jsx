function buttonAdd() {
    console.log("+");
}

export default function botao(props) {
    return (
        <div>
            <button onClick={buttonAdd}>Click</button>
        </div>
    )
}