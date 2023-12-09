'use client';
import React from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/utils/constants';
import { copyToClipboard } from '@/utils/utility';

function UrlCard({ url, copied, setCopied }) {
  const { long, short, id } = url;

  const text = (copied && 'Copied') || 'Copy';
  const background = (copied && COLORS.Primary26) || COLORS.Secondary49;

  const copyUrl = async () => {
    const copied = await copyToClipboard(short);

    if (!copied) {
      alert('Error copying to clipboard!');
      return;
    }

    setCopied(id);
  };

  return (
    <Wrapper>
      <LongUrl>
        <LongLink href={long} target="__blank" rel="noopenner, noreferrer">
          {long}
        </LongLink>
      </LongUrl>

      <ShortUrl>
        <ShortLink href={short} target="__blank" rel="noopenner, noreferrer">
          {short}
        </ShortLink>

        <Button
          onClick={copyUrl}
          style={{
            '--background': background,
          }}
        >
          {text}
        </Button>
      </ShortUrl>
    </Wrapper>
  );
}

const Link = styled.a`
  text-decoration: none;
  font-size: 1rem;
`;

const LongLink = styled(Link)`
  color: ${COLORS.Primary21};
`;

const ShortLink = styled(Link)`
  color: ${COLORS.Secondary49};
`;

const Button = styled.button`
  font-weight: 700;
  color: white;
  height: 40px;
  border-radius: 5px;

  border: none;
  background: var(--background);

  padding: 0 32px;
`;

const Wrapper = styled.div`
  background: ${COLORS.White};
  padding: 16px;
  border-radius: 5px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${18 / 16}rem ${32 / 16}rem;
  }
`;

const LongUrl = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  margin: 0 -16px;
  padding: 0 16px;

  height: 48px;
  border-bottom: 1px solid ${COLORS.Gray59};

  @media ${QUERIES.tabletAndUp} {
    border: none;
    height: revert;
  }
`;

const ShortUrl = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  height: 90px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 0;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    height: revert;
  }
`;

export default UrlCard;
