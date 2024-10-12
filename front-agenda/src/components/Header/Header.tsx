import styles from './Header.module.css'

import logoIcon from '../../assets/logo-icon.svg'
import profilePicture from '../../assets/profile-picture.jpg'

interface datas {
    titlePage: string
}

export default function Header(datasComponents: datas) {
    return (
        <div className={styles.Header}>
            <div className={styles.logo}>
                <img src={logoIcon} alt="Logo do projeto" />
                <strong>{ datasComponents.titlePage }</strong>
            </div>
            <div className={styles.profilePicture}>
                <img src={profilePicture} alt="" />
            </div>
        </div>
    )
}