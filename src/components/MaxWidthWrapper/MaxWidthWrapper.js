'use client';
import styled from 'styled-components';

function MaxWidthWrapper({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: ${1108 / 16}rem;
  padding: 24px;

  margin: 0 auto;
`;

export default MaxWidthWrapper;
