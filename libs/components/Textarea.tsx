import { TextareaStyle } from './types';

type TextareaProps = {
  textareaStyle: TextareaStyle;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

const basicClassName =
  'focus:text-gray-700 block w-full px-3 py-1.5 border border-solid border-gray-300 rounded transition';
const transparentClassName =
  'focus:text-gray-400 bg-transparent block w-full px-3 py-1.5 border-b-2 outline-none rounded transition';

const textareaStyles: Record<TextareaStyle, string> = {
  basic: basicClassName,
  transparent: transparentClassName,
};

const Textarea: React.FC<TextareaProps> = (props: TextareaProps) => {
  return (
    <div className="mb-6">
      <textarea
        className={textareaStyles[props.textareaStyle]}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Textarea;
