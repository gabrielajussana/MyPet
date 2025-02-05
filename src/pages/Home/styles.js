import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
` 

export const Main = styled.main`

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 7rem;
    align-items: center;
    height: calc(100vh - 5rem);
  

 h1{
    font-size: 2rem;
    font-weight: 700;
  }

  .get-started{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    background-color: #322e18;
    color: #f7f3f6;
    padding: .8rem 3rem;
    border-radius: 1rem;
    font-weight: 700;
  }

  .content{
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 4rem;
    gap: 1rem;
  }

  .dogs-images{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    padding: 0 4rem;
  }

  .dogs-images img:nth-child(1),
  .dogs-images img:nth-child(4){
    height: 250px;
    border-radius: 1rem;
  }
  
  .dogs-images img:nth-child(1){
    margin-left: 7rem;
  }


  .dogs-images img:nth-child(2),
  .dogs-images img:nth-child(3){
    width:100%;
    border-radius: 1rem;
  }

  .dogs-images img:nth-child(4){
    margin-left: 0;
  }
`

export const DogList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  margin-top: 4rem;
  padding: 2rem 3rem;
  
`
export const Dog = styled.li`
  display: flex;
  flex-direction: column;
  background: #f7f3f6;
  padding: 1rem ;
  align-items: center;
  border-radius: 1rem;
  gap: .5rem;
  box-shadow: -2px 11px 33px 5px rgba(0,0,0,0.74);
  transition: all 0.3s;
    
    :hover{
      transform: scale(1.1);
    }

  img{
    width: 180px;
    border-radius: 1rem;
    aspect-ratio: 1/1;
    object-fit: cover;

  }

  span{
    font-weight: 700;
  }

  .button{
    background-color: #62929e;
    border-radius: 1rem;
    padding: .5rem 1.5rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-top: 10px;
  }

  .button:hover{
    cursor: pointer;
    background-color: #d68c45;
  }

  .info{
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  
  .info p{
    display: flex;
    flex-direction: column;
    gap: .2rem;
    font-weight: 700;
  }

 .info p span{
    font-weight: 300;
  }

`

export const About = styled.section`

  background: #f7f3f6;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 2rem;
  height: 100vh;

  div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    z-index: 2;
  }

  h2{
    font-size: 2rem;
  }

  .dogAbout{
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: -2px 8px 20px 5px rgba(0,0,0,0.5);
  }

  .pet{
    position: absolute;
    width: 300px;
    z-index: 0;
    opacity: .3;
    top: 110vh;
    transform: rotate(30deg);
    right: 15%;
  }
`

export const Adopt = styled.section`
  height: calc(100vh - 6.7rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
 
  .adopt-text{
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 2rem;
    text-align: center;

  }

  .adopt-text div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .adopt-text .button {
    background: #62929e;
    padding: .5rem;
    width: 50%;
    border-radius: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .adopt-text .button:hover{
    background-color: #d68c45;
    cursor: pointer;
    transform: scale(1.1);
  }
  
  .container-img{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .adopt-img{
    width: 55%;
    border-radius: 1rem;
    box-shadow: -2px 8px 20px 5px rgba(0,0,0,0.5);
  }
  
`