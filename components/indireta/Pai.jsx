import Filho from "./Filho";

export default function Pai(props) {

    function falarComigo(params) {
        console.log(params);
        console.log("Alguém falou comigo!");
    }

    return (
        <div>
            <Filho funcao={falarComigo} />
        </div>
    )
}