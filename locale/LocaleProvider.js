'use client';
import { NextIntlClientProvider } from "next-intl";
import { getMessages, DEFAULT_LOCALE } from ".";
import {NextUIProvider} from "@nextui-org/system";
import { OnbordaProvider } from "onborda";

// eslint-disable-next-line react/function-component-definition
export default async function LocaleProvider(props) {
  const { children, locale = DEFAULT_LOCALE } = props;

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NextUIProvider>
        <OnbordaProvider>
            {children}
        </OnbordaProvider>
      </NextUIProvider>
    </NextIntlClientProvider>
  );
}
