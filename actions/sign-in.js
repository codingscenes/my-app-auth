'use server';

import { signIn as loggedIn } from '@/auth';

export async function signIn() {
  return await loggedIn('google');
}
