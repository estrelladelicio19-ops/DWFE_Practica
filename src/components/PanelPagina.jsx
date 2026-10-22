function Panel(props) {
    console.log(props)
    return (
        <section className="panel">
            <h2>{props.titulo}</h2>
            <div>{props.children}</div>
        </section>

    )
}
export default Panel