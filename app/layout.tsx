import 'overlayscrollbars/styles/overlayscrollbars.css';
import 'react-phone-number-input/style.css';
import 'swiper/css/bundle';
import ClientGlobalStyles from './ClientGlobalStyles';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import OverlayScrollbarsProvider from './OverlayScrollbarsProvider';
import NetlifyFormsDetect from './NetlifyFormsDetect';

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
          <OverlayScrollbarsProvider />
          {children}
          <div id="modal-root" />
          {/* Hidden server-rendered forms for Netlify detection */}
          <NetlifyFormsDetect />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
