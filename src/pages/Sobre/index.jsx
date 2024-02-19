import fotoPerfil from '../../assets/foto-perfil.png'
import lav from '../../assets/lavinia-oliveira.jpg'
import styles from './sobre.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
        Lavínia Oliveira
        </h1>
        <div>
            <img src={fotoPerfil} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Lavínia Oliveira</h1>
          <h2 className={styles.profissao}>Artista, Designer e Desenvolvedora Front-End</h2>
          <p className={styles.sobreMim}>
          Artista e designer, nascida em Salvador. 
          </p>
      </div>

      <div className={styles.subtitulo}>
        <img src={lav} />
        <p>
        Apaixonada por arte, música e tecnologia (como UX/UI e Front-End), busca constantemente por novas perspectivas e abordagens multidisciplinares.
        </p>
      </div>

      <div className={styles.tituloSobre}>
        Esses universos são evidenciados em suas criações que abraçam a inovação e transmitem uma energia singular, por meio de experiências que mesclam criatividade e os campos da comunicação.  
      </div>
    </>
  )
}

export default Sobre;