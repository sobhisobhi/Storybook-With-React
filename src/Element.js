import React from 'react';
import { Input } from './components/Input/Input';

export const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options } }) => {

    switch (field_type) {
        case 'text':
            return (
            <Input
                id={field_id}
                label={field_label}
                placeholder={field_placeholder}
                value={field_value}
                required
            />)
        default:
            return null;
    }
}
