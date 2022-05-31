import styled from 'styled-components';
import { mediaQueries } from 'config/responsive';
const { screenLittle } = mediaQueries;
export const Container = styled.header`
  display: flex ;
  position: fixed;
  z-index: 99;
  background: ${({ theme }) => theme.primaryLightNavBar};
  width:100vw ;
  top:0;
  left:0;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  font-size: .8rem;

  ${screenLittle} {
    font-size: .9rem;
  }
`;
export const Logo = styled.img`
    width: 4rem;
    height: var(--header-height);
    margin: .2rem;
    object-fit: contain;
    ${screenLittle} {
      margin-right: .2rem;
      width: 6rem;
    }
`;
export const navLinkStyles = ({ isActive }) => {
  const active = 'var(--blue-02)';
  return {
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive && active,
  };
};
