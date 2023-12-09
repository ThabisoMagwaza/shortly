'use client';
import { COLORS, QUERIES } from '@/utils/constants';
import styled from 'styled-components';

function Heading2({ children, color = COLORS.Primary21 }) {
  return (
    <Heading
      style={{
        '--color': color,
      }}
    >
      {children}
    </Heading>
  );
}

const Heading = styled.h2`
  font-size: ${28 / 16}rem;
  color: var(--color);

  @media ${QUERIES.tabletAndUp} {
    font-size: ${40 / 16}rem;
  }
`;

export default Heading2;
