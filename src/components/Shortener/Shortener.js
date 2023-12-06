'use client';
import React from 'react';

import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

import UrlShortener from '../UrlShortener';
import MaxWidthWrapper from '../MaxWidthWrapper';
import UrlRack from '../UrlRack';

function Shortener() {
  const [urls, setUrls] = React.useState([]);

  React.useEffect(() => {
    try {
      const savedString = localStorage.getItem('shortUrls');

      const savedUrls = JSON.parse(savedString);

      if (!Array.isArray(savedUrls)) {
        return;
      }

      return setUrls(savedUrls);
    } catch (error) {
      return;
    }
  }, []);

  const save = (url) => {
    const nextUrls = [...urls, url];
    setUrls(nextUrls);

    localStorage.setItem('shortUrls', JSON.stringify(nextUrls));
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
  padding-bottom: 0px;
`;

const Wrapper = styled.section`
  background: ${COLORS.Primary95};
`;

export default Shortener;
