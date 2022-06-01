import React from 'react';
import {
  Container,
  Image,
} from './styles';
export default function Card({ data, detail = false }) {
  return (
    <Container isDetail={detail}>
      {data.name && <div>
        {data.name}
      </div>}
      {data.episode && !detail && <div>
        {data.episode}
      </div>}
      { detail && <Image image={data.image} isDetail={detail} />}
    </Container>
  );
}
