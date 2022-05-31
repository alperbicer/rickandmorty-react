import React from 'react';
import { useSelector } from 'react-redux';
import linkLogo from 'components/utils/assets/linkLogo.png';
import {
  Container,
  Grid,
  SocialMedia,
  Organization,
  Name,
  Href,
  LinkedIn,
  OrganizationData,
  Adress,
  Phone,
} from './styles';
const UrlLogo = ({ href, logo }) => {
  return (
    <Href href={href}>
      <img src={logo} style={{ width: '50%' }} />
    </Href>
  );
};
export default function Footer() {
  const { list: organization } = useSelector(state => state.organization);
  return (
    <Container>
      <Grid>
        <SocialMedia>
          <Organization>
            <Name>{organization.name}</Name>
          </Organization>
          <LinkedIn>
            <UrlLogo href={organization.urlLinkedin} logo={linkLogo} />
          </LinkedIn>
        </SocialMedia>
        <OrganizationData>
          <Adress>
            <h4>{organization.address}</h4>
          </Adress>
          <Phone>
            <h4>{organization.phone}</h4>
          </Phone>
        </OrganizationData>
      </Grid>
    </Container>
  );
}
