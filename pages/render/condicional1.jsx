import SomentePar from "../../components/SomentePar";

export default function condicional1() {
    function repeticao(valor) {
        let array = [];
        for (let index = 0; index < valor; index++) {
            array.push(<SomentePar numero={index} />) 
        }
        return array;
    }
    return (
        <div>
            {repeticao(10000)}
        </div>
    )
}