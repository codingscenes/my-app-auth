'use server';
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
  const data = parsedResult.data;
  console.log(data)
}