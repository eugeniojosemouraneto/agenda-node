import styles from './progressBar.module.css';

// interfaces
import { ProgressBarProps } from '../../../interface/taskSummary'

export function ProgressBar(data: ProgressBarProps) {
    return (
        <div className="footerTaskSummary">
            <div className={styles.progressBar}>
                <div 
                    className={styles.progressFill} 
                    style={{ width: `${data.percentage100}%` }} 
                />
            </div>
            <div className={styles.textExtremePosition}>
                <p>
                    Você concluiu {data.numberCompletedTask} de {data.numberMaximumSubTask} <span>{data.percentage100}%</span>
                </p>
            </div>
        </div>
    );
};

