import styled from "styled-components";

export const Container = styled.div`

  display: grid;
  align-items: center;
  justify-content: center;
  width: 47.25rem;
  height: 100%;
  grid-template-columns: 362px 362px;
  gap: 1.8rem;
  margin-top: 4rem;
`


export const Content = styled.div`

  grid-template-columns: 362px 362px ;
  width: 362px;
  height: 226px;
  border-radius: 15px;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    opacity: 0.8;
    z-index: 0;
  }
  div{
    grid-template-columns: 362px 362px ;
    display: none;
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8rem;
    gap: 0.5rem;
   
  }

  &:hover {
    cursor: pointer; 
    
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
    div{
    display: flex;
    }
    a{
      display: flex;
    }
  }
 
  a{
    display: flex;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    background: var(--primary); 
    opacity: 1;
    color: var(--title);
    border-radius: 20px;
  }
  
`