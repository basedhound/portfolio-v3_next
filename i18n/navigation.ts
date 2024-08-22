//! next-intl
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
// Use localePrefix instead of Locales (to manage "en" as default = url/)
import {localePrefix} from './i18n';
console.log('localePrefix:', localePrefix);

 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({localePrefix: 'always'});