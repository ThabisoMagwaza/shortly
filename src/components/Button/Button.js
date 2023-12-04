'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  color: ${COLORS.White};
  font-size: ${20 / 16}rem;
  font-weight: 700;

  border: none;
  background: ${COLORS.Secondary49};

  height: ${56 / 16}rem;

  border-radius: 1000px;
  padding: 0 ${40 / 16}rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
