
import { getAllNotes } from '@/actions/notes';
import { Card, Avatar } from '@nextui-org/react';
import Link from 'next/link';
// import { UserCircleIcon } from '@heroicons/react/solid';

export default async function ShowNotes() {
  const notes = await getAllNotes();
  console.log(notes)
  return notes?.map(note => (<Card shadow className='w-full mx-auto mb-4'>
      <div className='flex items-center space-x-4 p-4 '>
        <Avatar src={note.user.image} alt='User Image' size='large' />
        <div>
        <Link href={`topics/${note.topic.slug}/notes/${note.id}`}>
          <h3 className='text-lg font-semibold'>{note.title}</h3>
        </Link>
          <p className='text-gray-500'>{note.user.name}</p>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-gray-700'>{note.content}</p>
      </div>
    </Card>))

}