import { useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import styles from './Post.module.css'
import PostModelo from 'components/PostModelo'

export default function Post (){
    
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
        // Parametros.id é string, para retornar um numero, usa o Number mesmo

    })
    
    return (
        <PostModelo fotoCapa={`/assets/capas/${post.id}/capa.png`} titulo={post.titulo}  >

        
        </PostModelo>

    )
}