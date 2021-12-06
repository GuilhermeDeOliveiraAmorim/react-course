export default function Estilo(props) {
    const classeAplicada = props.numero >= 0 ? "azul" : "vermelho";
    return (
        <div>
            <h1 style={{backgroundColor: props.numero >= 0 ? "green" : "red", textAlign: "center"}}>
                Texto #1
            </h1>
            <h1 className={classeAplicada}>
                Texto #2
            </h1>
        </div>
    )
}