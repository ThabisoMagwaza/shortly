'use client';
import styled from 'styled-components';

import { COLORS } from '@/utils/constants';

function UrlShortener() {
  return (
    <Wrapper>
      <Input placeholder="Shorten a link here..." />
      <Button>Shorten It</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  background-color: ${COLORS.Primary26};
  background-image: url('/images/bg-shorten-mobile.svg');
  background-repeat: no-repeat;
  background-position: 100% 0%;

  padding: ${24 / 16}rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: -104px;
  height: 160px;
`;

const Input = styled.input`
  border: none;
  height: ${48 / 16}rem;
  border-radius: 5px;

  font-size: 1rem;

  color: ${COLORS.VeryDarkBlue};
  padding: 6px 16px;
`;

const Button = styled.button`
  border: none;
  height: ${48 / 16}rem;
  border-radius: 5px;

  background: ${COLORS.Secondary49};
  font-weight: 700;
  color: ${COLORS.White};
`;

export default UrlShortener;
