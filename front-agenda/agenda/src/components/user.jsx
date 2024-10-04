import '../global.css'


export function User(props) {
	console.log(props);
	return (
		<div>
			<h1>Informações base do usuario</h1>
			<div>
            <p>Nome do usuario: { props.username }</p>
            <p>Email: { props.email }</p>
            <p>Data que o usuario foi criado: { props.creationDate }</p>
			</div>
		</div>
	);
}
