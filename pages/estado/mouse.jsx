import { useState } from "react";

export default function mouse() {
    
    const [x, setX] = useState(0);

    const arrayY = useState(0);
    let y = arrayY[0];
    const alterarY = arrayY[1];

    const estilo = {
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    function quandoMover(ev) {
        setX(ev.clientX);
        alterarY(ev.clientY);
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}