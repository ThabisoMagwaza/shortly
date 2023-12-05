'use client';
import React from 'react';

import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

import UrlShortener from '../UrlShortener';
import MaxWidthWrapper from '../MaxWidthWrapper';
import UrlRack from '../UrlRack';

function Shortener() {
  const [urls, setUrls] = React.useState([]);

  const save = (url) => {
    setUrls((prev) => [...prev, url]);
  };

  return (
    <Wrapper>
      <ShortnerWrapper>
        <UrlShortener save={save} />
        <UrlRack urls={urls} />
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
