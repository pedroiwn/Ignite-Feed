import styles from './style.module.css';
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from '../Avatar/Avatar';


export function Sidebar() {
 return (
   <aside className={styles.sidebar}>
    <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
    />
   
    <div className={styles.profile}> 
        <Avatar src="https://github.com/pedroiwn.png"/>
        <strong>Pedro Cristóvão</strong>
        <span>front-end web developer</span>
    </div>

    <footer>
        <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
        </a>
    </footer>
   </aside>
 );
}