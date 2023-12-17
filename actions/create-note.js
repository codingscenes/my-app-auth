'use server';
import { auth } from '@/auth';
import { db } from '@/db';
import { paths } from '@/path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import slugify from 'slugify';

const createNoteSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
});

export async function createNote(slug, formState, formData) {
  //TODO: revalidate topic page
  const result = createNoteSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // checking the session;
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['Please Login first!'],
      },
    };
  }

  let note = '';

  try {
    // saving the form data if user is loggedIn
    const topic = await db.topic.findFirst({
      where: { slug },
    });

    if (!topic) {
      return {
        errors: {
          _form: ['No topic found!'],
        },
      };
    }
    // Have valid topic
    note = await db.note.create({
      data: {
        title: result.data.title,
        content: result.data.description,
        userId: session.user.id,
        topicId: topic.id,
        slug: slugify(result.data.title, { lower: true }),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errros: {
          _forms: ['Failed to Create Note!'],
        },
      };
    }
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.noteDetails(slug, note.id));
}
