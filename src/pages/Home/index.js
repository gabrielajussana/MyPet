import {Container, Main, About, Adopt} from './styles.js';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';
import Header from '../Parts/Header.js';
import Footer from '../Parts/Footer.js';
import dog from '../../assets/dog.jpg'
import dog2 from '../../assets/dog2.jpg'
import dog3 from '../../assets/dog3.jpg'
import dog4 from '../../assets/dog4.jpg'
import dogAbout from "../../assets/dogAbout.jpg"
import pet from "../../assets/pet.svg"

function Home() {
  return (
   <Container>
    <Header />
    <Main>
        <div className="content">
        <h1>ENCONTRE VOCÊ MESMO UM MELHOR AMIGO</h1>
        <p>Temos os animais de estimação mais fofos disponíveis, todos esperando para fazer de você seu novo amigo.</p>
        <Link to={`../adoption`} style={{ textDecoration: 'none' }} className="get-started"> Adote aqui <img src={arrow} alt="adote aqui"/></Link>
        </div>
        <div className='dogs-images'>
          <img src={dog2} alt='' />
          <img src={dog3} alt='' />
          <img src={dog} alt='' />
          <img src={dog4} alt='' />
        </div>
    </Main>
    <About id="about">
      <div>
        <img className="dogAbout" src={dogAbout} alt="" />
      </div>
      <div>
      <h2>Sobre Nós</h2>
       <p>Somos uma ONG que resgata cachorros abandonados. Nosso objeto é encontrar um lar amoroso e seguro para cada um de nosso animais, 
        e ajudar você a encontrar um pet e levar mais alegria para a sua casa. 
       </p>
         <img src={pet} alt=""  className='pet'/>
      </div>
    </About>
    <Adopt>
      <div className="adopt-text">
         <div>
        <h2>Por que adotar?</h2>
        <p>Todos os pets merecem uma vida digna, regada com muito amor e proteção.
           Por esse motivo, ao concretizar uma adoção responsável você está proporcionado uma vida de mais qualidade para o pet.
           Como os pets de rua estão vulneráveis a diversos tipos de maus-tratos e riscos de vida, ao adotar,
            você estará garantindo que ele tenha uma oportunidade de sobreviver e de desfrutar de uma vida feliz e saudável com alguém que o ama.</p>
      </div>
      <div>
        <h2>Como adotar no MyPet?</h2>
        <p>Escolha o animal que quer adotar na nossa página de animais disponíveis. 
          Depois preencha o formulário de adoção com o seus dados, vamos analisar o seu pedido e entrar em contato assim que possível.
        </p>
        <Link to={`../adoption`} style={{ textDecoration: 'none' }} className="button">ADOTAR!</Link>
      </div>
    </div>
    <div className='container-img'> 
      <img src={dog2} className='adopt-img' alt=""/>
    </div>
    </Adopt>
    <Footer />
   </Container>
  );
}

export default Home;
