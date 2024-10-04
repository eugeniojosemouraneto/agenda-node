import styles from './Sidebar.module.css'
import '../../global.css'

import { PencilLine } from '@phosphor-icons/react'

import imgUser from '../../assets/profile-picture.png'
import avatarUser from '../../assets/profile-avatar.jpeg'

export function SideBar() {
    return (
        <aside className={ styles.SideBar }>
            <img className={ styles.cover } src={imgUser} alt="Profile img" />

            <div className={styles.profile}>
                <img className={ styles.avatar} src={avatarUser} />
                <strong>Eugenio Jose Moura Neto</strong>
            </div>

            <footer>
                <a href="#"><PencilLine />Editar perfil</a>
            </footer>
        </aside>
    )
}