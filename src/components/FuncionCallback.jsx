import { useState, useEffect } from "react";
function BotonSeleccion({ onSeleccionar, onSeleccionar2 }) {
    return (
        <>
        <button onClick={onSeleccionar}>
            Seleccionar curso
        </button>

        <button onClick={onSeleccionar2}>
            Seleccionar curso
        </button>
        </>
    );
}
function CursoApp() {
    const [curso, setCurso] = useState('Ninguno');
    const [cambio, setCambio] = useState(false);
    const [hora, setHora] = useState("");

    const mostrarHora = ()=>{
        const fecha = new Date();
        setHora(fecha.toLocaleTimeString("es-PE"));
    };
    useEffect(()=>{
        document.title = curso;
    },[cambio]);
    return (
        <>
        <section>
            <h2>Hora Actual: {hora}</h2>
            <p>Curso elegido: {curso}</p>
            <BotonSeleccion
                onSeleccionar={() => setCurso('React')}
                onSeleccionar2={() => setCurso('DWFE')}          
        />
        <button onClick={()=> {setCambio(!cambio)}}>Cambiar</button>
        <button onClick={mostrarHora}>Mostrar Hora</button>
        </section>
        </>
    );
}

export default  CursoApp