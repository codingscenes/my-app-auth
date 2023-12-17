import ShowNotes from '@/components/notes/show-notes';
import { getNotesBySearchTerm } from '@/actions/notes';
import { redirect } from 'next/dist/server/api-utils';

export default function SearchPage({ searchParams }) {
  const { term } = searchParams;
  if (!term) {
    redirect('/');
  }
  return (
    <div>
      <ShowNotes dbFn={() => getNotesBySearchTerm(term)} />
    </div>
  );
}
