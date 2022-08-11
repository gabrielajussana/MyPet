import {Container, Main} from './styles.js';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';
import Header from '../Parts/Header.js';
import dog from '../../assets/dog.jpg'
import dog2 from '../../assets/dog2.jpg'
import dog3 from '../../assets/dog3.jpg'
import dog4 from '../../assets/dog4.jpg'

function Home() {
  return (
   <Container>
    <Header />
    <Main>
        <section className="content">
        <h1>ENCONTRE VOCÊ MESMO UM MELHOR AMIGO</h1>
        <p>Temos os animais de estimação mais fofos disponíveis, todos esperando para fazer de você seu novo amigo.</p>
        <Link to={`../adoption`} style={{ textDecoration: 'none' }} className="get-started"> Adote aqui <img src={arrow}/></Link>
        </section>
        <section className='dogs-images'>
          <img src={dog2} alt='' />
          <img src={dog3} alt='' />
          <img src={dog} alt='' />
          <img src={dog4} alt='' />
        </section>
    </Main>
   </Container>
  );
}

export default Home;
