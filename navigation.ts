import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./i18n";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation();

//! When using i18n.ts, use this link instead of next/link to ensure proper routing.
