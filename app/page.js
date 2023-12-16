import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();
  // console.log(session);
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
