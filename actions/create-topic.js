'use server';
import { auth } from '@/auth';
import { db } from '@/db';
import { paths } from '@/path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, { message: 'LowerCase letter or dashes with no spaces' }),
  description: z.string().min(3)
})
export async function createTopic(prevData, formData) {
  // TODO: revalidate the root page
  const parsedResult = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description')
  })
  if (!parsedResult.success) {
    return {
      errors: parsedResult.error.flatten().fieldErrors
    }
  }

  // Protecting Server Action via Authentication
  const session = await auth();
  if (!session || !session?.user) {
    return {
      errors: {
        _form: ['Please Login to create a topic!']
      }
    }
  }
  const data = parsedResult.data;
  // console.log(data)
  let topic = '';

  try {
    topic = await db.topic.create({
      data: {
        slug: data.name,
        name: data.name,
        description: data.description
      }
    })
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    } else {
      return {
        errros: {
          _forms: ['Something went wrong!']
        }
      }
    }

  }
  revalidatePath('/')
  // console.log(topic)
  redirect(paths.topicShow(topic.slug))
}