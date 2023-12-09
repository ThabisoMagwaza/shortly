'use client';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/utils/constants';
import Heading3 from '../Heading3';

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
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(32px, -50%);

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
  position: relative;
  background: ${COLORS.White};
  padding: 32px;
  padding-top: 77px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  border-radius: 5px;

  position: relative;

  @media ${QUERIES.tabletAndUp} {
    width: ${350 / 16}rem;
    height: ${267 / 16}rem;

    text-align: start;
    align-items: flex-start;

    &:nth-of-type(3) {
      margin-top: 44px;
    }
    &:nth-of-type(4) {
      margin-top: 88px;
    }
  }
`;

export default FeatureCard;
