import { Link } from 'react-router-dom'
import styles from './LinkButtom.module.css'

function LinkButtom({ to, text, id }) {
    return (
        <Link className={styles.btn} to={to} id={id}>{text}</Link>
    )
}

export default LinkButtom