'use client';
import styled from 'styled-components';
import Image from 'next/image';

import { COLORS } from '@/utils/constants';

import Heading2 from '../Heading2';
import MaxWidthWrapper from '../MaxWidthWrapper';
import FeatureCard from '../FeatureCard';

function Features() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Heading2>Advanced Statistics</Heading2>
        <SubHeading>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </SubHeading>
      </HeaderWrapper>

      <FeaturesList>
        <DecoratorLine />

        <FeatureCard
          icon={
            <Icon
              src="/images/icon-brand-recognition.svg"
              width={40}
              height={40}
              alt=""
            />
          }
          heading="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don't
        mean a thing. Branded links help instil confidence in your content."
        />
        <FeatureCard
          icon={
            <Icon
              src="/images/icon-detailed-records.svg"
              width={40}
              height={40}
              alt=""
            />
          }
          heading="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <FeatureCard
          icon={
            <Icon
              src="/images/icon-fully-customizable.svg"
              width={48}
              height={48}
              alt=""
            />
          }
          heading="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </FeaturesList>
    </Wrapper>
  );
}

const DecoratorLine = styled.div`
  width: 8px;
  background: ${COLORS.Secondary49};
  position: absolute;

  inset: 0;
  margin: 0 auto;
`;

const Icon = styled(Image)`
  display: block;
`;

const FeaturesList = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: calc(44px + 48px);
`;

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 80px;
  padding-bottom: 80px;
  background: ${COLORS.Primary95};
  text-align: center;
`;

const SubHeading = styled.p`
  font-size: 1rem;
  color: ${COLORS.Primary63};
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: calc(44px + 48px);
`;

export default Features;
