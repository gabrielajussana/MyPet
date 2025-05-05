import { Container, DogList, Dog } from '../Home/styles';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';

function Adoption() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/8')
      .then(response => response.json())
      .then(data => setDogs(data.message))
      .catch(error => console.error('Erro ao buscar os cães:', error));
  }, []);

  const getBreedFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2].replace('-', ' ');
  };

  return (
    <Container>
      <Header />
      <DogList>
        {dogs.map((dog, index) => {
          const breed = getBreedFromUrl(dog);
          return (
            <Dog key={index}>
              <Link to={`../Details/${encodeURIComponent(dog)}`}>
                <img src={dog} alt={`Foto de um ${breed}`} />
              </Link>
              <h2>Nome</h2>
              <span>{breed}</span>
              <div className='info'>
                <p>Porte <span>***</span></p>
                <p>Idade <span>***</span></p>
                <p>Cidade <span>***</span></p>
              </div>
              <Link to='../form' style={{ textDecoration: 'none', textAlign: 'center' }} state={{ dog: dog, breed: breed, image: dog, name: 'Nome do Pet', age: 'Idade', city: 'Cidade' }} className='button'>ADOTE!</Link>
            </Dog>
          );
        })}
      </DogList>
      <Footer />
    </Container>
  );
}

export default Adoption;