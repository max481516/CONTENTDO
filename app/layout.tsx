import 'overlayscrollbars/styles/overlayscrollbars.css';
import 'react-phone-number-input/style.css';
import 'swiper/css/bundle';
import ClientGlobalStyles from './ClientGlobalStyles';
import StyledComponentsRegistry from './StyledComponentsRegistry';

export const metadata = {
  title: 'CONTENTDO',
  description: 'Next.js + TypeScript bootstrap',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <StyledComponentsRegistry>
          <ClientGlobalStyles />
          {children}
          <div id="modal-root" />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
