'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { Menu, X } from 'react-feather';
import { COLORS } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading1 from '../Heading1';
import Button from '../Button';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';

function Header() {
  return (
    <header>
      <NavigationWrapper>
        <Logo />

        <MobileMenu>
          <MenuButton>
            <MenuStyled id="open" size={30} strokeWidth={2} />
            <Close id="close" size={30} strokeWidth={2} />
          </MenuButton>
        </MobileMenu>
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

const MenuButton = styled.button`
  display: block;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;

  &[data-state='closed'] > #close {
    display: none;
  }

  &[data-state='open'] > #open {
    display: none;
  }
`;

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
  color: ${COLORS.Primary63};
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
  display: block;
  stroke-linecap: square;
  color: ${COLORS.Primary63};
`;

const Close = styled(X)`
  display: block;
  color: ${COLORS.Primary63};
`;
export default Header;
