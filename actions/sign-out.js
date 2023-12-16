'use server';

import { signOut as logOut } from '@/auth';


export async function signOut() {
  return await logOut('google');
}
