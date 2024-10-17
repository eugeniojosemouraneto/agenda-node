export interface TaskSummaty {
    title: string
    categoty: string
    dateMaximumComplet: string
    anexo: string | null
    porcentCompleted: number
    description: string
}

export interface ProgressBarProps {
    percentage: number
    percentage100: number
    numberMaximumSubTask: number
    numberCompletedTask: number
}