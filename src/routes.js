import {BrowserRouter, Route, Routes} from "react-router-dom"
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrão";

console.log(window.location)
 
function AppRoutes() {
  return( 
    <BrowserRouter>


      <Menu/>

     <Routes>
      <Route path="/" element={<PaginaPadrao/>}>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobremim" element={<SobreMim/>}/>
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
