//! next-intl
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
// Use localePrefix instead of Locales (to manage "en" as default = url/)
import {locales} from './i18n';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});