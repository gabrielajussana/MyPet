import {Container, DogList, Dog} from '../Home/styles';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';


function Adoption(){

const[dogs, setDogs] = useState([]);

  

 useEffect(() => {
   fetch(`https://dog.ceo/api/breeds/image/random/6`)
   .then(response => response.json())
   .then(data => setDogs(data.message))
 }, [])

  return(
   <Container>
    <Header /> 
    <DogList>    
         {dogs.map(dog => {
            return(
             <Dog>
             <Link to={`../Details/${dog}`}><img src={`${dog}`} alt="foto do cachorro"/></Link>
             <h2>Nome</h2>
             <span>{dog.match(`breeds/(.*?)/`)}</span>  
             <div className='info'>
                  <p>Porte <span>***</span></p>
                  <p>Idade <span>***</span></p>
                  <p>Cidade<span>***</span></p>
               </div> 
             <Link to={`../form`} style={{ textDecoration: 'none' }} className='button'>ADOTE!</Link>
             </Dog>
            )
         })}
    </DogList>
    <Footer />
   </Container>
  );
}

export default Adoption;
