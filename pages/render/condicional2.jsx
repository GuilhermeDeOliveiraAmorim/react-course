import If from "../../components/If";

export default function condicional2() {
    const numero = 5;
    const par = "";
    return (
        <div>
            <If teste={numero % 2 === 0}>
                É par
            </If>
            <If teste={numero % 2 === 1}>
                É ímpar
            </If>
        </div>
    )
}