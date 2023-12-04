import GlobalStyles from '@/components/GlobalStyles';
import StyledComponentsRegistry from '@/utils/registry';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Url Shortener',
  description: 'Shorten valid urls using the url shortening api',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
