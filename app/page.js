import * as actions from '@/actions';
import { auth } from '@/auth';
import { Button } from '@nextui-org/react';

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <main>
      {session?.user?.name}
      {!session?.user && (
        <form action={actions.signIn}>
          <Button type='submit'>SigIn</Button>
        </form>
      )}
      {session?.user && (
        <form action={actions.signOut}>
          <Button type='submit'>SignOut</Button>
        </form>
      )}
      {JSON.stringify(session)}
    </main>
  );
}
