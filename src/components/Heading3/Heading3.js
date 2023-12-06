'use client';
import styled from 'styled-components';

import { COLORS } from '@/utils/constants';

function Heading3({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h3`
  font-size: ${22 / 16}rem;
  font-weight: 700;
  color: ${COLORS.Primary21};
`;

export default Heading3;
