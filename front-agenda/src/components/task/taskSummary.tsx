import styles from './taskSummary.module.css'

// companents
import { ProgressBar } from './progressBar/progressBar'

// interfaces
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react"
import { TaskSummaty } from "../../interface/taskSummary"

export function TaskSummary(task: TaskSummaty) {
    let stylesTask
    const today = new Date().toISOString().split('T')[0];
    if (task.dateMaximumComplet < today) stylesTask = `${styles.RedTaskSummary}`
    let isStatusTask = `${styles.redr}`
    if(task.porcentCompleted == 1.00) isStatusTask = `${styles.false}`
    return (
        <article className={styles.taskSummary}>
            <header>
                <div className={styles.headerTaskSummary}>
                    <h2 className={stylesTask}>
                        Atrasada em 1 dia <span className={styles.icon}><Trash size={19} /></span>
                    </h2>
                </div>
                <div className={styles.contentTaskSummary}>
                    <div className={styles.column01}>
                        <h1><Circle size={20} className={stylesTask}/> {task.title}</h1>
                        <span>{task.categoty}</span>
                        <p>Data máxima para conclusão: {task.dateMaximumComplet}</p>
                    </div>
                    <div className={styles.column02}>
                        <p>
                            Descrição: {task.description}
                        </p>
                    </div>
                </div>
                <ProgressBar
                    percentage={0.585}
                    percentage100={0.585 * 100}
                    numberMaximumSubTask={9}
                    numberCompletedTask={5}
                />
            </header>
        </article>
    )
} 