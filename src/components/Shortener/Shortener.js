'use client';
import styled from 'styled-components';
import UrlShortener from '../UrlShortener';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { COLORS } from '@/utils/constants';

function Shortener() {
  return (
    <Wrapper>
      <ShortnerWrapper>
        <UrlShortener />
      </ShortnerWrapper>
    </Wrapper>
  );
}

const ShortnerWrapper = styled(MaxWidthWrapper)`
  /* padding-top: 0; */
`;

const Wrapper = styled.section`
  background: ${COLORS.Primary95};
`;

export default Shortener;
