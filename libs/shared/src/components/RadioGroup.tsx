import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface RadioGroupProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  options: { value: string; label: string }[];
  register: UseFormRegister<T>;
  errorMessage?: string;
}

export function RadioGroup<T extends FieldValues>({ label, name, options, register, errorMessage }: RadioGroupProps<T>) {
  const groupId = `${name}-group`;
  const selectedValue = '';

  return (
    <div className="mb-4">
      <fieldset className="border border-gray-300 p-3 rounded">
        <legend className="block text-lg font-medium text-left mb-2" id={groupId}>
          {label}
        </legend>
        <div className="flex items-center flex-wrap gap-4" role="radiogroup" aria-labelledby={groupId}>
          {options.map((option) => {
            const optionId = `${name}-${option.value}`;
            const isChecked = selectedValue === option.value;

            return (
              <label key={option.value} htmlFor={optionId} className="flex items-center cursor-pointer">
                <input
                  {...register(name)}
                  id={optionId}
                  type="radio"
                  value={option.value}
                  className="form-radio accent-primary hover:accent-primary h-6 w-6"
                  aria-checked={isChecked}
                  defaultChecked={isChecked}
                />
                <span className="ml-2">{option.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
