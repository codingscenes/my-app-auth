import Link from 'next/link';

import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

import { auth } from '@/auth';
import Profile from './profile';
import SearchInput from '../search-input';

export default async function Header() {
  // using this below function will make the whole page dynamic
  // this is dealing with cookies
  // this is in the header
  /**
   * useSession() does not direclty access the cookies, it makes a request to the backend to figure out the auth status
   * so no access of cookies === 'static'
   */
  const session = await auth();

  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href={'/'} className='font-bold'>
          NotesApp
        </Link>
      </NavbarBrand>

      <NavbarContent justify='end' >
        <NavbarItem>
          <SearchInput/>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' className='w-28 ms-4'>
        <NavbarItem>
          <Profile />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
