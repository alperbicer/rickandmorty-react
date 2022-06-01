import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import EpisodeListPage from 'pages/EpisodeList';
import EpisodePage from 'pages/Episode';
import CharacterPage from 'pages/Character';
import Page404 from './404';
import ScrollToTop from 'components/utils/ScrollToTop';
export default function RouteList() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<EpisodeListPage />} />
        <Route path='/episode' element={<EpisodeListPage />} />
        <Route path='/episode/:id' element={<EpisodePage />} />
        <Route path='/character/:id' element={<CharacterPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <ScrollToTop showButtonAt={60} />
    </Container>
  );
}
const Container = styled.div`
  margin-top: var(--header-height);
  min-height: calc(100vh - 120px);
`;