'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react'; // for accessing session on client component using useSession() hook fom 'next-auth/react'; ->
// session = useSession()
// session.data?.user

// sharing next ui state to all components eg modal etc.
export default function Providers({ children }) {
  return;
  <SessionProvider>
    <NextUIProvider>{children}</NextUIProvider>
  </SessionProvider>;
}
