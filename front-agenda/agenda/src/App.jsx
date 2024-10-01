import { User } from "./components/user";
import { Header } from "./components/header";

export function App() {
	return (
    <div>
      <Header />
      <User 
        username="Eugenio Jose Moura Neto"
        email="eugeniojosemouraneto092@gmail.com"
        creationDate="29/09/2024, domingo"
      />
      <User 
        username="Fabio Moura"
        email="fabiomoura@gmail.com"
        creationDate="12/09/2024, domingo"
      />
    </div>
  );
}
