'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

function Heading1({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  font-size: ${42 / 16}rem;
  font-weight: 700;
  color: ${COLORS.VeryDarkBlue};
`;

export default Heading1;
