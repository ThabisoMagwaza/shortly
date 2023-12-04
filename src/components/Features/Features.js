'use client';
import styled from 'styled-components';

import { COLORS } from '@/utils/constants';
import Heading1 from '../Heading1';

function Features() {
  return (
    <Wrapper>
      <Heading1>Advanced Statistics</Heading1>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 55px;
  background: ${COLORS.Primary95};
`;

export default Features;
