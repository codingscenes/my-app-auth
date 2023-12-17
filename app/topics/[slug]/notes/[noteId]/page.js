import NoteLoader from '@/components/notes/note-loader';
import ShowNoteDetail from '@/components/notes/show-note-detail';
import { paths } from '@/path';
import Link from 'next/link';
import { Suspense } from 'react';

export default function NoteDetailPage({ params }) {
  const { slug, noteId } = params;
  return (
    <div className='space-y-3'>
        <Link className='underline decoration-solid'
        href={paths.topicShow(slug)}>back to {slug}</Link>
      <Suspense fallback={<NoteLoader/>}>
        <ShowNoteDetail noteId={noteId}/>
      </Suspense>
    </div>
  )
}