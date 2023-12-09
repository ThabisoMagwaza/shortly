'use client';
import styled from 'styled-components';
import Image from 'next/image';

import { COLORS, QUERIES } from '@/utils/constants';

import Heading2 from '../Heading2';
import MaxWidthWrapper from '../MaxWidthWrapper';
import FeatureCard from '../FeatureCard';

function Features() {
  return (
    <Wrapper>
      <ContentWrapper>
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
      </ContentWrapper>
    </Wrapper>
  );
}

const DecoratorLine = styled.div`
  width: 8px;
  background: ${COLORS.Secondary49};
  position: absolute;

  inset: 0;
  margin: 0 auto;

  @media ${QUERIES.phoneAndUp} {
    width: revert;
    margin: auto 0;
    height: 8px;
  }
`;

const Icon = styled(Image)`
  display: block;
`;

const FeaturesList = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(44px + 48px);

  @media ${QUERIES.phoneAndUp} {
    flex-direction: row;
    gap: 30px;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  background: ${COLORS.Primary95};
`;

const ContentWrapper = styled(MaxWidthWrapper)`
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;

  @media ${QUERIES.phoneAndUp} {
    padding-top: 120px;
    padding-bottom: 120px;
  }
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
  margin-left: auto;
  margin-right: auto;

  max-width: ${540 / 16}rem;

  @media ${QUERIES.phoneAndUp} {
    margin-bottom: calc(44px + 56px);
  }
`;

export default Features;
