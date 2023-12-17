'use server';
import { auth } from '@/auth';
import { db } from '@/db';

export async function getAllNotes() {
  // const session = await auth();
  // if (!session || !session?.user) {
  //   return {
  //     errors: {
  //       _form: ['Please Login to create a topic!'],
  //     },
  //   };
  // }

  const notes = await db.note.findMany({
    // where: {
    //   userId: session.user.id,
    // },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: { select: { name: true, image: true } },
      topic: {select: {slug: true}}
    },
    take: 5,
  });
  return notes;
}

export async function getNotesBySlug(slug) {
  
}
