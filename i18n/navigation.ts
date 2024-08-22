//! next-intl
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {localePrefix} from './i18n';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({localePrefix});