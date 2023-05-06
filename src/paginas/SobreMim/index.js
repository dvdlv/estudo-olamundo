import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

export default function SobreMim() {

  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim!">
      <h3 className={styles.subtitulo}>

      </h3>

      <img src={fotoSobreMim} className={styles.fotoSobreMim} alt="Imagem de David" />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu aluno de Front-end na Alura e estou feliz de te ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com programação começou no Instituto Federal Fluminense(IFF), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, C++, JavaScript, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação.
      </p>

      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Engenharia de Controle e Automação Federal Fluminense (IFF). Ao qual ainda estou cursando.
      </p>

      <p className={styles.paragrafo}>
        Minha primeira experiência como Dev Front End está sendo agora, com o projeto Oracle Next Education - ONE em parceria com a Fundação Bungee e Alura, que me forneceram esse lugarzinho para aprender mais e mais. 
      </p>

      <p className={styles.paragrafo}>
        No momento ainda estou procurando minha oportunidade de ingressar no mercado de trabalho voltado para tecnologia. 
      </p>

      <p className={styles.paragrafo}>
        Só tenho a agradecer pela oportunidade de aprender mais e mais com todos os instrutores da Alura e espero que o que eu coloco aqui nesta página, possa ser de alguma ajuda! 
      </p>


    </PostModelo>
  )
}