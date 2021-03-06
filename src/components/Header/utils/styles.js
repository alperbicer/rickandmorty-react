import styled from 'styled-components';
export const CardMenuNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 1rem 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid var(--gray-02);
  a, span {
    padding: .4rem 0;
  }
`;
export const StyledMenuTemplate = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.primaryLightNavBar};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  transition: transform 0.3s ease-in-out;
  width: 80% ;
  z-index: 0;
  h1 {
    font-size: 1.7rem;
  }
  a,span {
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.2rem;
    text-align: center;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
