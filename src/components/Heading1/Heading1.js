'use client';
import styled from 'styled-components';
import { COLORS, QUERIES } from '@/utils/constants';

function Heading1({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  font-size: ${42 / 16}rem;
  font-weight: 700;
  color: ${COLORS.Primary21};
  line-height: 1.1;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${80 / 16}rem;
  }
`;

export default Heading1;
