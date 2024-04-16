import { FC } from 'react';
import './style.css';

interface ICheckboxGroupProps {
  value: string[];
  onChange: (newValue: string[]) => void;
  options: string[];
}

export const CheckboxGroup: FC<ICheckboxGroupProps> = ({
  value,
  onChange,
  options,
}) => {
  const handleChange = (option: string, newValue: boolean) => {
    if (newValue) {
      onChange([...value, option]);

      return;
    }

    const newChosenOptions = value.filter((item) =>
      item === option ? newValue : true,
    );

    onChange(newChosenOptions);
  };

  return (
    <div className="checkBoxGroup__container">
      {options.map((option) => (
        <div
          className="checkBoxGroup__wrapper"
          key={option}
        >
          <input
            type="checkbox"
            checked={value.includes(option)}
            onChange={(event) => handleChange(option, event.target.checked)}
            id={option}
          />

          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};
