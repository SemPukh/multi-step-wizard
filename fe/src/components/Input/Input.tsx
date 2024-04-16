import { FC } from 'react';

interface IInputProps {
  type?: string;
  value: string | number | undefined;
  onChange: (newValue: string | number) => void;
}

export const Input: FC<IInputProps> = ({ type = 'text', value, onChange }) => (
  <input
    type={type}
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);
