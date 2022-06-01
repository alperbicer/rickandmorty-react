import { CardContainer, ContainerClikeable } from 'common/styles';
import NotFound from 'components/utils/NotFound';
import Card from 'components/Base/Card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllEpisodes } from 'store/slices/episodes';
function EpisodeListPage() {
  const { episodes } = useSelector(state => state.episodes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEpisodes());
  }, [dispatch]);
  const navigate = useNavigate();
  const handleShowActivity = (id) => {
    navigate(`/episode/${id}`);
  };
  return (
    <CardContainer>
      {episodes?.length > 0
        ? episodes.map((episode, index) =>
          <ContainerClikeable key={index} onClick={() => handleShowActivity(episode.id)}>
          <Card
            key={index}
            data={episode}
            detail={false}
          />
          </ContainerClikeable>)
        : <NotFound resource='Episodes' />}
    </CardContainer>
  );
}
export default EpisodeListPage;
