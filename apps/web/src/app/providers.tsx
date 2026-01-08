"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { type AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { getQueryClient } from "@/lib/get-query-client";

const ENABLE_DEVTOOLS = process.env.NEXT_PUBLIC_ENABLE_DEVTOOLS === "true";

const TanStackDevTools = ENABLE_DEVTOOLS
  ? dynamic(
      () => import("@/components/devtools/tanstack-devtools").then((mod) => mod.TanStackDevTools),
      { ssr: false }
    )
  : () => null;

interface ProvidersProps {
  children: ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </JotaiProvider>
      <TanStackDevTools />
    </QueryClientProvider>
  );
}
