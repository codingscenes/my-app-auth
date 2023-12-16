'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

// sharing next ui state to all components eg modal etc.
export default function Providers({ children }) {
  return
  <SessionProvider>
  <NextUIProvider>{children}</NextUIProvider>
  </SessionProvider>
}
