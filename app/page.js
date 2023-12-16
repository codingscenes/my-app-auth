import * as actions from '@/actions';
import { auth } from '@/auth';
import { Button } from '@nextui-org/react';

export default async function Home() {
  console.log(await auth());
  return (
    <main>
      <form action={actions.signIn}>
        <Button type='submit'>Click</Button>
      </form>
      <form action={actions.signOut}>
        <Button type='submit'>SignOut</Button>
      </form>
    </main>
  );
}
