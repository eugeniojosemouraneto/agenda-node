import './global.css'
import style from './App.module.css'

// components
import Header from './components/Header/Header'
import { TaskSummary } from './components/task/taskSummary'

export default function App() {
  return (
    <div>
        <Header 
            titlePage = "Igan, menu de tarefas"
        />
        <div className={style.content}>
            <div className={style.column01}>
                <h2>Minhas categorias</h2>
            </div>
            <div>
                <h2>Minhas tarefas</h2>
                <TaskSummary 
                    title='AED1 ENG1550 Eletrônica Geral'
                    categoty='Eletrônica Geral'
                    dateMaximumComplet='14/10/2024'
                    anexo={null}
                    porcentCompleted={58}
                    description='Descrição:  Projetar uma fonte de alimentação conforme figura abaixo para atender uma determinada carga RL, grupo Máximo de 3 alunos, entregar DIA 14-10-2024, entregar fonte montada funcionando e relatório de cálculo e custo da fonte:'
                />
                <TaskSummary 
                    title='AED1 ENG1550 Eletrônica Geral'
                    categoty='Eletrônica Geral'
                    dateMaximumComplet='14/10/2024'
                    anexo={null}
                    porcentCompleted={58}
                    description='Descrição:  Projetar uma fonte de alimentação conforme figura abaixo para atender uma determinada carga RL, grupo Máximo de 3 alunos, entregar DIA 14-10-2024, entregar fonte montada funcionando e relatório de cálculo e custo da fonte:'
                />
            </div>
        </div>
    </div>
 )
}
