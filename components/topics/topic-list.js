import { db } from '@/db';
import { paths } from '@/path';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

const TopicList = async () => {

  const topics = await db.topic.findMany();

  const topicList = topics.map(topic => (
    <div key={topic.id}>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color='default' variant='shadow'>
          {topic.slug}
        </Chip>
      </Link>
    </div>
  ))
  return <div className='flex flex-row flex-wrap gap-2'> {topicList}</div>;
}

export default TopicList;
