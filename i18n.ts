import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('messages/en.json')
        : import(`messages/${locale}.json`))
    ).default
  };
});



//! How to use translations inside pages/components
// #1
/* If you use normal server components without fetching data: 
import { useTranslations } from "next-intl"; */

// #2
/* If you use async/await : 
import { getTranslations } from "next-intl/server"; */

// #3
/* If you use client components ("use clinet"): 
import { useTranslations } from "next-intl";
Sometimes, this might not work, so you'll need to pass the translation from the parent to the child as a prop.*/