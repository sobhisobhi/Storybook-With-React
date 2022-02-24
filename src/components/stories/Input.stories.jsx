import React from 'react';

import { Input } from '../Input/Input';

export default {
    title: 'Example/Input',
    component: Input,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    
    },
  };

const Template = (args) => <Input {...args} />;
export const TextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {
    
    id:'text',
    type: 'text',
    placeholder:'Your text',
    required: true,
    label: 'Label Text',
    //error: 'Bad text'
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    
    id:'email',
    type: 'email',
    placeholder:'Your email',
    required: true,
    label: 'Email',
    //error: 'Bad Email or Password'    
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {

        id:'password',
        type:'password',
        placeholder:'Your password',
        required: true,
        label: 'Password',
        //error: 'Bad Login or Password'
    
};
