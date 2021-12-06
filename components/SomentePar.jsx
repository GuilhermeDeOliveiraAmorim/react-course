export default function SomentePar(props) {
    if (props.numero % 2 === 0) {
        return (
            <span style={{paddingRight:"5px"}}>
                {props.numero}
            </span>
        );
    } else {
        return null;
    }
}