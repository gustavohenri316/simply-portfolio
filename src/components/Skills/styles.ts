import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47.25rem;
  height: 105rem;
  gap: 1.8rem;
  margin-top: 4rem;
  margin-bottom: 7rem;
  background: var(--primary);
  border-radius: 20px;
`


export const Content = styled.div`
  width: 100%;
  height: 90%;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`
export const Title = styled.h1`
  color: var(--title);
`
export const Table = styled.table`
  width: 100%;
  border-spacing: 2rem 0.9rem;
  
`
export const Thead = styled.thead`
  color: var(--title);
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;

`
export const Tbody = styled.tbody`
 
`
export const Tr = styled.tr`
color: var(--text);
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;

`
export const Th = styled.th`
  color: var(--text);
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;

`
export const Td = styled.td`
  padding: 1rem 2rem;
  border: 0;
  background: var(--background);
  font-weight: 400;
  color: var(--text);
  border-radius: 0.25rem;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  &:first-child {
    color: var(--text);
  }
  
`

export const Progress = styled.progress`
  width: 100%;
  height: 1rem;
  display:block;
  -webkit-appearance: none;
  background: var(--background);

::-webkit-progress-bar {

    background: var(--primary);
    border-radius: 50px;
    padding: 2px;
}
::-moz-progress-bar {  
    background: var(--primary);
    border-radius: 50px;
    padding: 2px;
}
::-webkit-progress-value {
    border-radius: 50px;
    background: var(--yellow);
}

`