import styled from 'styled-components';
import { mediaQueries } from 'config/responsive';
const { screenMiddle } = mediaQueries;
export const Container = styled.article`
  min-width: 300px;
  display: flex;
  height: auto;
  width: auto;
  flex-direction: column;
  align-items: center;
  gap:.7rem;
  margin: 1.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryDark};

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: #FAFAFA; 
  ${props => (!props.isDetail) && `
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, var(--blue-02) 0px -3px 0px inset;
  }
  
  ` }
  `;
export const Image = styled.div`
  min-height: ${props => props.isDetail ? '25vh' : '20vh'};
  height: ${props => props.isDetail ? '100%' : '200px'};
  width: ${props => props.isDetail ? '100%' : '80%'};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
  margin:auto;

${screenMiddle} {
  min-height: ${props => props.isDetail ? '30vh' : '20vh'};
}

`;