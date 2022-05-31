import styled from 'styled-components';
export const Button = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  background-color: ${({ theme }) => theme.primaryLight};
  border: 2px solid ${({ theme }) => theme.primaryDark} ;
  cursor: pointer;
  display: block ;
  width: auto;
  margin: 1rem auto ;
  padding: .6rem 1.2rem;
  
  &:hover {
    color: ${({ theme }) => theme.primaryLight};
    /* background-color: ${({ theme }) => theme.primaryDark}; */
    background-color: var(--black-01);
    /* border: 2px solid ${({ theme }) => theme.primaryLight}; */
  }
  transition: all .3s ease, visibility 0s;

`;