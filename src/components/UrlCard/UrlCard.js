'use client';
import React from 'react';

import { COLORS } from '@/utils/constants';
import styled from 'styled-components';

function UrlCard({ url, copied, setCopied }) {
  const { long, short, id } = url;

  const text = (copied && 'Copied') || 'Copy';
  const background = (copied && COLORS.Primary26) || COLORS.Secondary49;

  const copyUrl = () => {
    setCopied(id);
  };

  return (
    <Wrapper>
      <Header>
        <LongLink href={long} target="__blank" rel="noopenner, noreferrer">
          {long}
        </LongLink>
      </Header>

      <Content>
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
      </Content>
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
`;

const Wrapper = styled.div`
  background: ${COLORS.White};
  padding: 16px;
  border-radius: 5px;
`;

const Header = styled.header`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  margin: 0 -16px;
  padding: 0 16px;

  height: 48px;
  border-bottom: 1px solid ${COLORS.Gray59};
`;

const Content = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  height: 90px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  justify-content: space-between;
`;

export default UrlCard;
