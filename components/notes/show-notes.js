import { Card, Avatar } from '@nextui-org/react';
import Link from 'next/link';
// import { UserCircleIcon } from '@heroicons/react/solid';

export default async function ShowNotes({ dbFn, slug }) {

  const notes = await dbFn(slug ? slug : null);

  let renderedNotes = '';

  if (!notes.length) {
    renderedNotes = <h1 className='text-2xl font-bold text-gray-800 mt-8 '>Notes are not available!</h1>;
  } else  {
    renderedNotes = notes?.map((note) => (
      <Card shadow className='w-full mx-auto mb-4'>
        <div className='flex items-center space-x-4 p-4 '>
          <Avatar src={note.user.image} alt='User Image' size='large' />
          <div>
            <Link href={`/topics/${note.topic.slug}/notes/${note.id}`}>
              <h3 className='text-lg font-semibold'>{note.title}</h3>
            </Link>
            <span className='text-sm absolute top-10 right-10'>
              {note.createdAt.toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </span>
            <p className='text-gray-500'>by {note.user.name}</p>
          </div>
        </div>
        <div className='p-4'>
          <p className='text-gray-700'>{note.content}</p>
        </div>
      </Card>
    ));
  }
  return renderedNotes;
}