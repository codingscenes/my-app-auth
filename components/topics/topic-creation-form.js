'use client';
import { useFormState } from 'react-dom';

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea
} from '@nextui-org/react';

import * as actions from '@/actions';

export default function TopicCreationForm() {
  const [state, formAction] = useFormState(actions.createTopic, { errors: {} })
  return (
    <Popover placement='left-start'>
      <PopoverTrigger>
        <Button color='primary'>Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={formAction}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input name='name' label='Name' labelPlacement='outside' placeholder='Name' />
            <Textarea name='description' label='Description' labelPlacement='outside'
              placeholder='Describe your topic in detail.' />
            <Button type='submit'>Submit</Button>

          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}