'use server';
import { z } from 'zod';
import { auth } from '@/auth';

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
  console.log(data)
}