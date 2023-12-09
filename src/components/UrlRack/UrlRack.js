'use client';
import React from 'react';

import { QUERIES } from '@/utils/constants';

import styled from 'styled-components';
import UrlCard from '../UrlCard';

function UrlRack({ urls }) {
  const [copied, setCopied] = React.useState(null);

  return (
    <Wrapper>
      {urls.map((url) => (
        <UrlCard
          key={url.id}
          url={url}
          copied={url.id === copied}
          setCopied={setCopied}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${QUERIES.tabletAndUp} {
    gap: 16px;
  }
`;

export default UrlRack;
