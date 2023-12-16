import Link from 'next/link';

import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

import { auth } from '@/auth';
import Profile from './profile';

export default async function Header() {
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
          <Input placeholder='Search your notes' className='w-96' variant='bordered' />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' className='max-w-fit ms-4'>
        <NavbarItem>
          <Profile />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
