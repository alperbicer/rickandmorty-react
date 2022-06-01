import { CardContainer, Wrapper } from 'common/styles';
import NotFound from 'components/utils/NotFound';
import Card from 'components/Base/Card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from 'store/slices/episodes';
function CharacterPage() {
  const { characters } = useSelector(state => state.episodes);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchCharacter({ characters: [params.id] }));
  }, [dispatch]);
  return (
    <CardContainer>
      <Wrapper>
      { characters && characters.length > 0 ?
        <Card
          data={characters[0]}
          detail
        /> : <NotFound resource='Character' />}
        </Wrapper>
    </CardContainer>
  );
}
export default CharacterPage;
