import { CardContainer, ContainerClikeable, Wrapper } from 'common/styles';
import NotFound from 'components/utils/NotFound';
import Card from 'components/Base/Card';
import Dropdown from 'components/Base/Dropdown';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEpisode, fetchCharacter } from 'store/slices/episodes';
import { Episode, EpisodeName } from './styles.js';
function EpisodePage() {
  const { episode, characters } = useSelector(state => state.episodes);
  const dispatch = useDispatch();
  const params = useParams();
  const genders = ['', 'unknown', 'male', 'genderless', 'female'];
  useEffect(() => {
    async function fetchData() {
      const { payload } = await dispatch(fetchEpisode(params.id));
      dispatch(fetchCharacter({ characters: payload.characters }));
    }
    fetchData();
  }, [dispatch]);
  const navigate = useNavigate();
  const handleShowActivity = (url) => {
    const urlSplitList = url.split('/');
    navigate(`/character/${urlSplitList[urlSplitList.length - 1]}`);
  };
  const handleGenderSelected = ({ value }) => {
    const characterUrls = characters.map(caharacter => caharacter.url);
    dispatch(fetchCharacter({
      characters: characterUrls,
      filters: { gender: value },
      episode: episode.id,
    }));
  };
  return (
    <CardContainer>
      <Episode>
        {episode.episode}
      </Episode>
      <EpisodeName>
        {episode.name}
      </EpisodeName>
      <Dropdown options={genders} handleOnSelect={handleGenderSelected} />
      <Wrapper>
        {characters?.length > 0
          ?
          characters.map((character, index) =>
            <ContainerClikeable key={index} onClick={() => handleShowActivity(character.url)}>
              <Card
                key={index}
                data={character}
                detail
              />
            </ContainerClikeable>)
          : <NotFound resource='Episode' />}
        </Wrapper>
    </CardContainer>
  );
}
export default EpisodePage;
