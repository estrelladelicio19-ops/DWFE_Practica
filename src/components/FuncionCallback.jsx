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
    useEffect(()=>{
        document.title = curso;
    },);
    return (
        <>
        <section>
            <p>Curso elegido: {curso}</p>
            <BotonSeleccion
                onSeleccionar={() => setCurso('React')}
                onSeleccionar2={() => setCurso('DWFE')}  
                
        />
        </section>
        </>
    );
}

export default  CursoApp