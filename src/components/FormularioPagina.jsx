import { useState } from "react"
function Formulario() {
    const [mensaje, setMensaje] = useState('');
    const [valores, setValores] = useState(
        {
            Nombre: "",
            Correo: ""
        }
    );

    function cambiarDatos(e){
        const{name, value} = e.target;
        setValores({
            ...valores,
            [name]:  value
        });
    }
    function enviarDatos(e) {
        e.preventDefault();
        setMensaje("Cargando")
        setTimeout(
            () => {
                setMensaje("Datos cargados correctamente")
            }, 2000
        )

        setTimeout(
            () => {
                setMensaje("")
            }, 3000
        )
    }

    return (
        <>
            <h1>{mensaje}</h1>
            <form onSubmit={enviarDatos}>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id="Nombre" name="Nombre" value={valores.Nombre} onChange={cambiarDatos} />

                <label htmlFor="correo">Correo: </label>
                <input type="email" id="Correo" name="Correo" value={valores.Correo} onChange={cambiarDatos} />

                <button type="submit">Enviar Datos</button>
            </form>
        </>
    )
}
export default Formulario