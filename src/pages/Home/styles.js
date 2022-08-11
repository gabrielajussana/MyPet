import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  width: 100%;
  height: 100vh;


` 

export const Main = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 7rem;
    align-items: center;
    height: 85vh;
  

 h1{
    font-size: 3rem;
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
  padding: 0 3rem;
  
`
export const Dog = styled.li`
  display: flex;
  flex-direction: column;
  background: #f7f3f6;
  padding: 1rem;
  align-items: center;
  border-radius: 1rem;
  gap: .5rem;
  box-shadow: -2px 11px 33px 5px rgba(0,0,0,0.74);

  img{
    width: 180px;
    border-radius: 1rem;

  }

  .buttons{
    display: flex;
    gap: 1rem;
  }

  .button{
    background-color: #62929e;
    border-radius: 1rem;
    padding: .5rem 1.5rem;
    font-weight: 700;
    letter-spacing: 3px;
  }

  .button:nth-child(1){
    background-color: #d68c45;
  }
`