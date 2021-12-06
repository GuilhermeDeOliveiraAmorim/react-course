import { useState } from "react"

export default function contador() {

    const [number, setNumber] = useState(0);
    
    const inc = () => setNumber(number + 1);
    const dec = () => setNumber(number - 1);

    const estilo = {
        backgroundColor: "red",
        height: {number},
        width: {number}
    }

    return (
        <div>
            <h1>
                Contador
            </h1>
            <div style={estilo}>
                Valor: {number}
            </div>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </div>
    )

}