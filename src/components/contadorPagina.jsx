import { useState } from "react"
function Contador() {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje]  = useState('');

    function actualizarContador()
    {
        setContador(contador + 1); 
                if (contador >= 9) 
                {
                    setMensaje("Ganaste");
                }
                
    }
    
    
    return (
        <>
            <h2>{mensaje}</h2>
            <h2>{contador}</h2>
            <button onClick={actualizarContador}>Aumentar Valor</button>
                
            <button onClick={() => {setContador(contador - 1)}}>Disminuir Valor</button>

            <h2>Bienvenidos al portal académico</h2>
        </>
    )
}
export default Contador