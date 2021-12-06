import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Adriano" familia={props.familia} />
            <Filho nome="Pedro" familia={props.familia} />
            <Filho nome="José" familia={props.familia} />
        </div>
    )
}