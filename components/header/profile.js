'use client';

import * as actions from '@/actions';
import { Avatar, Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
// async and await does not work in client component

export default function Profile() {
  // this will not make this component dynamic as useSession does not access
  // the cookies direclty it connect with the backend
  const session = useSession();
  const data = session?.data;
  let content = '';

  if (session?.status === 'loading')
    content = null;

  else if (data?.user) {
    content = (
      <Popover placement='left'>
        <PopoverTrigger>
          <div className='flex justify-center items-center'>
            <Avatar src={data?.user.image || ''} className='me-2' alt='Avatar profile' title={data?.user?.name} />
            {data?.user?.name}
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button variant='bordered' color='danger' type='submit'>Logout</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else
    content = (
      <form action={actions.signIn}>
        <Button type='submit' color='secondary' variant='bordered'>
          Login
        </Button>
      </form>
    )

  return content;
}
