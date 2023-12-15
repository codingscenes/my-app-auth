'use client';

import { NextUIProvider } from '@nextui-org/react';

// sharing next ui state to all components eg modal etc.
export default function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
