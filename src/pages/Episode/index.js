import Episode from 'components/Episode';
import React from 'react';
import { Container } from './styles';
function EpisodePage() {
  return (
    <Container>
      <Episode qty='all' title='Todas las Noticias' />
    </Container>
  );
}
export default EpisodePage;
