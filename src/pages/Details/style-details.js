import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height:100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;

  .pet{
    opacity: .5;
    width: 80%;
  }

  main{
    display: grid;
    width: 100%;
    height: 50%;
    grid-template-rows: 1fr 1fr;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: -2px 11px 33px 5px rgba(0,0,0,0.74);
  }

  main img{
    width: 100%;
    background: cover;
    border-radius: 1rem 1rem 0 0;
  }
  
  .content{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 2rem;
  }

  .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  p{
    display: flex;
    flex-direction: column;
    gap: .2rem;
    font-weight: 700;
  }

  span{
    font-weight: 300;
  }

  .buttons{
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  .button{
    display: flex;
    background-color: #62929e;
    border-radius: 1rem;
    padding: .5rem 2rem;
    font-weight: 700;
    letter-spacing: 3px;
    align-items: center;
  }

  .close{
    width: 40px;
    height: 40pxç;
  }

`