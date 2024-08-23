//! NEXT-INTL
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",

  //! Do not add "/en" for default url
  localePrefix: "as-needed"
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
