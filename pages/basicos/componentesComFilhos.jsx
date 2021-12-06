import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componentesComFilhos(props) {
    return (
        <div>
            <Lista>
                <Item content={"A"} />
                <Item content={"B"} />
                <Item content={"C"} />
                <Item content={"D"} />
            </Lista>
        </div>
    )
}