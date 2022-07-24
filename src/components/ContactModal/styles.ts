import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const Title = styled.h2`
  color: var(--title);
  padding-bottom: 2rem;
`
export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`
export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 33px;
  color: var(--text);
  width: 100%;
`
export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  border: none;
  padding-left: 0.9rem;
`
export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 10rem;
  border-radius: 10px;
  border: none;
  padding-left: 0.9rem;
  padding-top: 0.4rem;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 3rem;
  border: none;
  border-radius: 10px;
  margin-top: 1rem;
  background: var(--yellow);
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 33px;
  color: #000;
  right: 100%;

  &:disabled{
    cursor: not-allowed;
    filter: brightness(1);
    color: var(--title);
  }
`
export const Close = styled.button`
  display: flex;
  margin-left: 100%;
  margin-top: -2rem;
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--text);
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

&:hover{
  filter: brightness(0.4);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

`
export const Tel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .DDD{
  width: 15%;
}
gap: 2rem;
`
export const TelContent = styled.div`
width: 100%;


`