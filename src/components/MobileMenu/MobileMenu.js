'use client';
import styled from 'styled-components';

import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';

import { COLORS } from '@/utils/constants';

function MobileMenu({ children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Close asChild></Dialog.Close>
        <Dialog.Overlay />
        <Content>
          <nav>
            <NavList>
              <li>
                <NavLink href="/">Features</NavLink>
              </li>
              <li>
                <NavLink href="/">Pricing</NavLink>
              </li>
              <li>
                <NavLink href="/">Resources</NavLink>
              </li>
            </NavList>
          </nav>

          <LoginButton>Login</LoginButton>
          <SignUpButton>Sign Up</SignUpButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
`;

const SignUpButton = styled.button`
  border: none;
  height: 48px;
  border-radius: 1000px;
  color: inherit;
  background: ${COLORS.Secondary49};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
  padding-bottom: 30px;

  border-bottom: 1px solid ${COLORS.Primary40};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font: inherit;
`;

const Content = styled(Dialog.Content)`
  color: ${COLORS.White};
  font-weight: 800;

  position: fixed;
  top: 96px;
  left: 24px;
  right: 24px;

  background: ${COLORS.Primary26};

  display: flex;
  flex-direction: column;
  gap: 30px;

  border-radius: 10px;

  padding: 40px 24px;
`;

export default MobileMenu;
