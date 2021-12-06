export default function repeticao1(props) {
    const listaAprovados = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
    ];
    function renderizarLista() {
        return listaAprovados.map(
            function (nome, i) {
                return <li key={i}>{nome}</li>
            }
        );
    }
    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

// function renderizarLista() {
//     const itens = [];
//     for (let index = 0; index < listaAprovados.length; index++) {
//         itens.push(<li key={index}>{listaAprovados[index]}</li>);
//     }
//     return itens;
// }