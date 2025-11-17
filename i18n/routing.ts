import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'th'],       // ถูกต้อง
  defaultLocale: 'th',          // default เป็นไทย ✅
  localePrefix: 'always',       // ใส่ prefix ภาษาเสมอ ✅
});
