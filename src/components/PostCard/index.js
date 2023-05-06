import { Link } from 'react-router-dom';
import styles from './PostCard.module.css'


export default function PostCard({ post }) {

    console.log(post.id);
    return (

        <Link to={`/posts/${post.id}`}>

            <div className={styles.post}>

                <img className={styles.capa} src={`./assets/capas/${post.id}/capa.png`} alt='Imagem' />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <button className={styles.botaoLer}>Ler</button>
            </div>

        </Link>

    )
}