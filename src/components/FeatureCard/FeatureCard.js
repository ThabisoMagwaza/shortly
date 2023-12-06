'use client';
import styled from 'styled-components';

import Heading3 from '../Heading3';
import { COLORS } from '@/utils/constants';

function FeatureCard({ icon, heading, text }) {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>

      <Heading3>{heading}</Heading3>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const IconWrapper = styled.div`
  margin-top: calc(-32px - (88px / 2));

  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: ${COLORS.Primary26};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: ${15 / 16}rem;
  color: ${COLORS.Primary63};
`;

const Wrapper = styled.div`
  background: ${COLORS.White};
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  border-radius: 5px;

  position: relative;
`;

export default FeatureCard;
