'use client';
import styled from 'styled-components';

import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';

function MobileMenu({ children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Close asChild></Dialog.Close>
        <Dialog.Overlay />
        <Content>
          <ul>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li>
          </ul>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
`;

export default MobileMenu;
