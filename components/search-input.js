'use client';

import { search } from '@/actions/notes';
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

export default function SearchInput() {
  // wrap this component with <Suspense></Suspense> whereever you are using it
  const searchParams = useSearchParams();
  return (
    <form action={search}>
      <Input
        placeholder='Search your notes'
        className='w-96'
        variant='bordered'
        defaultValue={searchParams.get('term') || ''}
        name='term'
      />
    </form>
  );
}
