import '../style.css'


export function User(props) {
	console.log(props);
	return (
		<div>
			<p>Informações base do usuario</p>
			<div>
            <h6>Nome do usuario: { props.username }</h6>
            <p>Email: { props.email }</p>
            <p>Data que o usuario foi criado: { props.creationDate }</p>
			</div>
		</div>
	);
}
