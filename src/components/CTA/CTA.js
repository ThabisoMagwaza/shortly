'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

import Heading2 from '../Heading2';
import Button from '../Button';

function CTA() {
  return (
    <Wrapper>
      <Heading2 color={COLORS.White}>Boost your links today</Heading2>
      <Button>Get Stated</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 300px;
  background-color: ${COLORS.Primary26};

  background-image: url('/images/bg-boost-mobile.svg');

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export default CTA;
