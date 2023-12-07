'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Menu, X } from 'react-feather';
import { COLORS, QUERIES } from '@/utils/constants';

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

        <DestktoNav>
          <Navigation>
            <li>
              <NavLink href="/">Features</NavLink>
            </li>
            <li>
              <NavLink href="/">Pricing</NavLink>
            </li>
            <li>
              <NavLink href="/">Resources</NavLink>
            </li>
            <LoginWrapper>
              <NavLink href="/">Login</NavLink>
            </LoginWrapper>
            <li>
              <SignUpLink href="/">Sign Up</SignUpLink>
            </li>
          </Navigation>
        </DestktoNav>

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

const LoginWrapper = styled.li`
  margin-left: auto;
`;

const DestktoNav = styled.nav`
  flex: 1;
  display: none;

  @media ${QUERIES.phoneAndUp} {
    display: revert;
  }
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  margin-left: 32px;

  align-items: baseline;

  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
    margin-left: 46px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: ${15 / 16}rem;
  color: ${COLORS.Primary63};
  font-weight: 700;
`;

const SignUpLink = styled(NavLink)`
  background: ${COLORS.Secondary49};
  padding: 0 24px;
  height: 40px;
  color: ${COLORS.White};

  border-radius: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuButton = styled.button`
  display: block;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;

  padding: 24px;
  margin: -24px;

  &[data-state='closed'] > #close {
    display: none;
  }

  &[data-state='open'] > #open {
    display: none;
  }

  @media ${QUERIES.phoneAndUp} {
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
  align-items: center;
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
