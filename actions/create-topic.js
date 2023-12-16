'use server';


export async function createTopic(formData) {
  // TODO: revalidate the root page
  const name = formData.get('name');
  const description = formData.get('description');
  
}