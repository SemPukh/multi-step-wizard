import { FC } from 'react';
import './style.css';

interface IRadioGroupProps {
  value: string;
  onChange: (newValue: string) => void;
  options: string[];
}

export const RadioGroup: FC<IRadioGroupProps> = ({
  value,
  onChange,
  options,
}) => (
  <div className="radioGroup__container">
    {options.map((option) => (
      <div
        className="radioGroup__wrapper"
        key={option}
      >
        <input
          type="radio"
          checked={value === option}
          value={option}
          onChange={(event) => onChange(event.target.value)}
          id={option}
        />

        <label htmlFor={option}>{option}</label>
      </div>
    ))}
  </div>
);
