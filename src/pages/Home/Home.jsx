import styles from './home.module.css'
import homeImg from '../../assets/homeimg.svg'


const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
            Projeto Final Pretalab 2024!
        </h1>
        <img src={homeImg} />
      </div>
      <div className={styles.subtitulo}>
        <p>
          Esse é o site do projeto final do módulo de React do Ciclo formativo Básico da Pretalab.
          Projeto desenvolvido em React abordando todos os tópicos vistos durante a aula (Componentes, Props,
          Estados, Listas e Keys, Hooks, onChange e onClick, Context API em React, React Router DOM
          imagens e modularização do CSS, TDD).
        </p>
      </div>
    </>
  )
}

export default Home