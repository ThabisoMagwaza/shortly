'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { Menu } from 'react-feather';
import { COLORS } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading1 from '../Heading1';
import Button from '../Button';

function Header() {
  return (
    <header>
      <NavigationWrapper>
        <Image
          width={121}
          height={33}
          src="/images/logo.svg"
          alt="Shorty logo"
        />

        <MenuStyled size={30} strokeWidth={2} />
      </NavigationWrapper>

      <HeroWrapper>
        <HeroImageWrapper>
          <HeroImage
            width={733}
            height={482}
            src="/images/illustration-working.svg"
            alt="An illustration of a person sitting comfortably in front of a desktop monitor"
          />
        </HeroImageWrapper>

        <HeroContent>
          <Heading1>More than just shorter links</Heading1>
          <HeroText>
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </HeroText>

          <Button>Get started</Button>
        </HeroContent>
      </HeroWrapper>
    </header>
  );
}

const HeroWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: row-reverse;

  flex-wrap: wrap;
  gap: 40px;

  margin-bottom: 168px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  flex: 1;

  min-width: 300px;
`;

const HeroImageWrapper = styled.div`
  min-width: 350px;
  min-height: 337px;
  margin-right: -24px;
  flex: 2;
`;

const HeroText = styled.p`
  margin-top: 16px;
  margin-bottom: 32px;
  color: ${COLORS.GrayishViolet};
`;

const HeroImage = styled(Image)`
  display: block;
  object-fit: cover;
  object-position: 0 0;

  width: 100%;
  height: 100%;
`;

const NavigationWrapper = styled(MaxWidthWrapper)`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const MenuStyled = styled(Menu)`
  stroke-linecap: square;
  color: ${COLORS.GrayishViolet};
`;

export default Header;
