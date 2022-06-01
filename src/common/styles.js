import styled from 'styled-components';
import { mediaQueries } from 'config/responsive';
const { screenLittle, screenMiddle, screenVeryBig } = mediaQueries;
export const CardContainer = styled.section`
  margin: auto ;
  &>h1 {
    text-align: center ;
  }

  ${screenLittle} {
    width: 650px;
  }
  ${screenMiddle} {
    width: 900px;
  }
  ${screenVeryBig} {
    width: 1200px;
  }
`;
export const ContainerClikeable = styled.div`
  cursor: pointer;
  min-width: 300px;
`;
export const CardH1 = styled.h1`
  font-size: 1.3rem;
  margin: auto ;
  box-shadow: 0 2px gray;
  width:100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;