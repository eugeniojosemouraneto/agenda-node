import styles from "./Header.module.css";

import iganLogo from '../assets/igan-logo.svg'

console.log(iganLogo)

export function Header() {
	return (
		<header className={ styles.Header }>
			<img src={ iganLogo }  alt="Aplication logo"/>
			<strong>Igan, agenda</strong>
		</header>
	
	);
}
