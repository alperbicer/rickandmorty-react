import Loader from 'components/utils/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getService } from 'services/apiService';
import { ENDPOINT_NEWS } from 'services/settings';
import { Container } from './styles';
function CharacterPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [setData] = useState({});
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (params.id) {
        const response = await getService(ENDPOINT_NEWS, params.id);
        if (response.data?.id) {
          setData(response.data);
        } else {
          setData();
        }
        setIsLoading(false);
      }
    })();
  }, [params.id, getService]);
  if (isLoading) return <Loader />;
  return (
    <Container>
    </Container>
  );
}
export default CharacterPage;
