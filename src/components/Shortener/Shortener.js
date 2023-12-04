'use client';
import styled from 'styled-components';
import UrlShortener from '../UrlShortener';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { COLORS } from '@/utils/constants';
import UrlRack from '../UrlRack';

const URLs = [
  {
    id: 1,
    long: 'https://www.frontendmentor.io',
    short: 'https://rel.ink/k4lKyk',
  },
  {
    id: 2,
    long: 'https://twitter.com/frontendmentor',
    short: 'https://rel.ink/gxOXp9',
  },
  {
    id: 3,
    long: 'https://www.linkedin.com/company/frontend-mentor',
    short: 'https://rel.ink/k4lKyk	',
  },
];

function Shortener() {
  return (
    <Wrapper>
      <ShortnerWrapper>
        <UrlShortener />
        <UrlRack urls={URLs} />
      </ShortnerWrapper>
    </Wrapper>
  );
}

const ShortnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Wrapper = styled.section`
  background: ${COLORS.Primary95};
`;

export default Shortener;
