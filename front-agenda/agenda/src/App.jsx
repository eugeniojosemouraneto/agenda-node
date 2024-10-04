import "./global.css";
import styles from "./App.module.css";

// components
import { User } from "./components/user";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar/Sidebar";

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<SideBar />
				<main>
					<User
						username="Eugenio Jose Moura Neto"
						email="eugeniojosemouraneto092@gmail.com"
						creationDate="29/09/2024, domingo"
					/>
				</main>
			</div>
		</div>
	);
}
