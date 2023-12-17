'use client';

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from '@nextui-org/react';

import * as actions from '@/actions';
import { useFormState } from 'react-dom';
import FormButton from '../common/form-button';

export default function CreateNoteForm({slug}) {
  const [formState, formAction] = useFormState(actions.createNote.bind(null, slug), { errors: {} });

  return (
    <Popover placement='left-start'>
      <PopoverTrigger>
        <Button color='primary'>Create Note</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={formAction}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a Note</h3>
            <Input
              name='title'
              label='Title'
              labelPlacement='outside'
              placeholder='Title'
              isInvalid={!!formState.errors?.title}
              errorMessage={formState.errors?.title?.join(', ')}
            />
            <Textarea
              name='description'
              label='Description'
              labelPlacement='outside'
              placeholder='Description'
              isInvalid={!!formState.errors?.description}
              errorMessage={formState.errors?.description?.join(', ')}
            />
            {formState.errors._form ? (
              <div className='rounded p-2 bg-red-200 border border-red-400'>{formState.errors._form.join(', ')}</div>
            ) : null}
            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
