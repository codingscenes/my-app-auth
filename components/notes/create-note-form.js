'use client';

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@nextui-org/react';

import FormButton from '../common/form-button';


export default function CreateNoteForm() {

  return (
    <Popover placement='left-start'>
      <PopoverTrigger>
        <Button color='primary'>
          Create Note
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action="">
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className="text-lg">Create a Note</h3>
            <Input name='title' label='Title' labelPlacement='outside' placeholder='Title' />
            <Input
              name='description'
              label='Description'
              labelPlacement='outside'
              placeholder='Description'
            />
            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}