'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { COLORS, QUERIES } from '@/utils/constants';
import Logo from '../Logo';

function Footer() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo color={COLORS.White} />
      </LogoWrapper>

      <OuterNavWrapper>
        <InnerNavWrapper>
          <NavTitle>Features</NavTitle>
          <NavList>
            <li>
              <NavLink href="/">Link Shortening</NavLink>
            </li>
            <li>
              <NavLink href="/">Branded Links</NavLink>
            </li>
            <li>
              <NavLink href="/">Analytics</NavLink>
            </li>
          </NavList>
        </InnerNavWrapper>
        <InnerNavWrapper>
          <NavTitle>Resources</NavTitle>
          <NavList>
            <li>
              <NavLink href="/">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/">Developers</NavLink>
            </li>
            <li>
              <NavLink href="/">Support</NavLink>
            </li>
          </NavList>
        </InnerNavWrapper>
        <InnerNavWrapper>
          <NavTitle>Company</NavTitle>
          <NavList>
            <li>
              <NavLink href="/">About</NavLink>
            </li>
            <li>
              <NavLink href="/">Out Team</NavLink>
            </li>
            <li>
              <NavLink href="/">Careers</NavLink>
            </li>
            <li>
              <NavLink href="/">Contact</NavLink>
            </li>
          </NavList>
        </InnerNavWrapper>

        <SocialLinks>
          <li>
            <SocialLink href="/">
              <Image
                src="/images/icon-facebook.svg"
                width={24}
                height={24}
                alt="Facebook icon - Link to Facebook"
              />
            </SocialLink>
          </li>
          <li>
            <SocialLink href="/">
              <Image
                src="/images/icon-twitter.svg"
                width={24}
                height={20}
                alt="Twitter icon - Link to Twitter"
              />
            </SocialLink>
          </li>
          <li>
            <SocialLink href="/">
              <Image
                src="/images/icon-pinterest.svg"
                width={24}
                height={24}
                alt="Pintest icon - Link to Pintest"
              />
            </SocialLink>
          </li>
          <li>
            <SocialLink href="/">
              <Image
                src="/images/icon-instagram.svg"
                width={24}
                height={24}
                alt="Instagram icon - Link to Instagram"
              />
            </SocialLink>
          </li>
        </SocialLinks>
      </OuterNavWrapper>
    </Wrapper>
  );
}

const LogoWrapper = styled.div`
  flex: 1;
`;

const Wrapper = styled.footer`
  background: ${COLORS.Primary14};
  padding: 56px;

  color: ${COLORS.White};
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const OuterNavWrapper = styled.div`
  display: flex;
  flex: 1.8;
  flex-direction: column;
  gap: 40px;

  @media ${QUERIES.phoneAndUp} {
    margin-left: auto;
    flex-direction: row;
    align-items: flex-start;
    gap: 80px;
  }
`;

const InnerNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media ${QUERIES.phoneAndUp} {
    text-align: start;
  }
`;

const NavTitle = styled.h4`
  color: ${COLORS.White};
  font-size: 16px;
`;

const NavList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.Gray75};
  font-size: ${15 / 16}rem;
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  gap: 24px;

  margin-left: auto;
`;

const SocialLink = styled(Link)`
  text-decoration: none;
`;

export default Footer;
