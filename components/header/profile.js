import * as actions from '@/actions';
import { auth } from '@/auth';
import { Avatar, Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

export default async function Profile() {
  const session = await auth();

  let content = (
    <form action={actions.signIn}>
      <Button type='submit' color='secondary' variant='bordered'>
        Login
      </Button>
    </form>
  );

  if (session?.user) {
    content = (
      <Popover placement='left'>
        <PopoverTrigger>
          <div className='flex justify-center items-center'>
            <Avatar src={session?.user.image || ''} className='me-2' alt='Avatar profile' title={session?.user?.name} />
            {session?.user?.name}
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
  }

  return content;

}
