import React from 'react';
import { Input, TextFieldContainer } from './TextFieldStyles';

export default function TextField({
  placeholder,
  value,
  type,
  disabled,
  error,
  className,
  fnFocus,
  nameInput,
  required,
}) {
  return (
    <TextFieldContainer>
      <Input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        onFocus={fnFocus}
        name={nameInput}
        required={required}
      />
    </TextFieldContainer>
  );
}
