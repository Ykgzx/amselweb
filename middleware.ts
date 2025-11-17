// app/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['th', 'en','jp'],
  defaultLocale: 'th',
  localeDetection: false,
});

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)']
};

