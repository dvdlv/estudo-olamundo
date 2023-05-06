import './Post.css'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'components/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import NotFound from 'paginas/NotFound'
import PaginaPadrao from 'components/PaginaPadrão'

export default function Post() {

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
        // Parametros.id é string, para retornar um numero, usa o Number mesmo

    })

    if (!post) {
        return <NotFound />
    }

    return (

        <>
            <Routes>
                <Route path='*' element={<PaginaPadrao />}>
                    <Route index element={
                        <PostModelo
                            fotoCapa={`/assets/capas/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <div className='post-markdown-container'>
                                <ReactMarkdown>
                                    {post.texto}
                                </ReactMarkdown>
                            </div>

                        </PostModelo>
                    } />
                </Route>
            </Routes>
            
            <div>
                <ul>
                    
                </ul>
                    
            </div>






        </>
    )
}