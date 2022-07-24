import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  background: var(--primary);
  border: none;
  border-radius: 50%;

  &:hover {
    background:  ${(props) => props.theme.title === 'light' ? '#171F26' : props.theme.colors.yellow};
    color: ${(props) => props.theme.title === 'dark' ? '#0000' : props.theme.colors.primary};
  }
`