function Footer(props) {
    console.log(props)
    return (
        <footer id="contacto">
            <p>IESP "TRUJILLO" © {props.aniopie}</p>
            <p>Programa de Estudios: {props.programa}</p>
            <p>Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer