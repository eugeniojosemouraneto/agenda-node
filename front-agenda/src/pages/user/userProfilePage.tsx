import './global.css'

// components
import Header from '../../components/Header/Header'
import UserData from '../../components/user/userData'

import profilerPicture from './assets/profile-picture.jpg'

export default function App() {
  const AuxnumberTasksaAlreadyRegistered:number = 32
  const AuxnumberTasksAlreadyCompleted:number = 28
  return (
    <div>
      <Header 
          titlePage = "Igan, perfil do usuario"
      />
      <UserData
        username='eugeniojosemouraneto'
        profilePicture={profilerPicture}
        dateCreation='07/10/2024'
        numberTasksaAlreadyRegistered={AuxnumberTasksaAlreadyRegistered}
        numberTasksAlreadyComplete={AuxnumberTasksAlreadyCompleted}
        description='Universitario estudante de Engenharia de Computação PUC-GO'
      />
    </div>
 )
}
