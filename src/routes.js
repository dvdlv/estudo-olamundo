import {BrowserRouter, Route, Routes} from "react-router-dom"
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrão";
import Post from "components/Post";

console.log(window.location)
 
function AppRoutes() {
  return( 
    <BrowserRouter>


      <Menu/>

     <Routes>
      <Route path="/" element={<PaginaPadrao/>}>
        <Route index element={<Inicio/>} />
        <Route path="sobremim" element={<SobreMim />} />
        <Route path="posts/:id" element={<Post />} /> 
        {/* sobre o código acima, o /:id poderia ser qualquer outro nome de variavel, por exemplo /:pew e utilizando dessa sintaxe atrelada a ferramenta do react useParams() , você vai pegar o valor, nesse caso, do /:pew. 
        Exemplo: localhost:3000/posts/batata  ---- retorna valor pew = batata */}
      </Route> 
      {/* Conceito de rotas aninhadas onde uma rota padrão recebe outras específicas 
      compartilhando um caminho chave */}

      <Route path="*" element={<div>Página não encontrada</div>} />
     </Routes>
     <Rodape/>
    </BrowserRouter>
)
}
export default AppRoutes
