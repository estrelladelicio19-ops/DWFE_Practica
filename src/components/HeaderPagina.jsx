function Header(props) {
console.log(props);

  return (
   <header>
    <h1>{props.cabecera[0].titulos}</h1>
    <p>{props.cabecera[1].titulos}</p>
   </header>
  )
}

export default Header