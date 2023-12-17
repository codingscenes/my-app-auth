'use server';
import { auth } from '@/auth';
import { db } from '@/db';
import { z } from 'zod';

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
          _forms: ['Something went wrong!'],
        },
      };
    }
  }
}
