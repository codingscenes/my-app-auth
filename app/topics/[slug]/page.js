import CreateNoteForm from '@/components/notes/create-note-form';
import ShowNotes from '@/components/notes/show-notes';
import { getNotesBySlug } from '@/actions/notes';

export default function TopicPage({ params }) {

  const { slug } = params;

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h1 className='text-3xl font-bold-4 font-bold text-gray-800 mt-8 mb-4'>{slug}</h1>
        <ShowNotes dbFn={getNotesBySlug} slug={slug} />
      </div>
      <div>
        <CreateNoteForm slug={slug} />
      </div>
    </div>
  );
}