'use server';
import { auth } from '@/auth';
import { db } from '@/db';
import { redirect } from 'next/navigation';

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
      topic: { select: { slug: true } },
    },
    take: 5,
  });
  return notes;
}

export async function getNotesBySlug(slug) {
  const notes = await db.note.findMany({
    where: { topic: { slug } },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: { select: { name: true, image: true } },
      topic: { select: { slug: true } },
    },
    take: 5,
  });
  return notes;
}

export async function getNotesBySearchTerm(term) {
  return db.note.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
    },
    where: {
      OR: [{ title: { contains: term } }, { content: { contains: term } }],
    },
  });
}

export async function search(formData) {
  const term = formData.get('term');
  console.log(term);
  if (typeof term !== 'string' || !term) {
    redirect('/');
  }

  redirect(`/search?term=${term}`);
}
