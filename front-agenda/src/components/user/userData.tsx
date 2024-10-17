import styles from './userData.module.css'

import { PencilLine, Trash } from '@phosphor-icons/react'

// interfaces
import { userData } from '../../interface/user'

export default function UserData(datas: userData) {
    return (
        <div className={styles.content}>
            <div className={styles.profileAvatar}>
                <img src={datas.profilePicture} alt="" />
            </div>
            <div className={styles.information}>
                <h2 className={styles.title}>
                    Nome do usuário: <span className={styles.titleDatas}>{datas.username}</span>
                </h2>
                <p>Descrição: {datas.description}</p>
                <p>Data que o perfil foi criado: {datas.dateCreation}</p>
                <hr />  
                <h3 className={styles.textCenter}>Informações basicas do usuario na aplicação</h3>
                <div className={styles.taskInfo}>
                    <p>
                        Quantidade de tarefas já criadas: 
                        <span className={styles.taskData}>{datas.numberTasksaAlreadyRegistered}</span>
                    </p>
                    <p>
                        Quantidade de tarefas já concluídas: 
                        <span className={styles.taskData}>{datas.numberTasksAlreadyComplete}</span>
                    </p>
                </div>
            </div>
            <div>
                <div className={styles.buttonIcon}>
                    <PencilLine size={18} />
                </div>
                <div className={styles.buttonIcon}>
                    <Trash size={18} />
                </div>
            </div>
        </div>
    ) 
}