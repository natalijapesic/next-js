type TextareaProps = {
    textareaStyle: "basic" | undefined;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
  };
  
  const basicClassName =
    "focus:text-gray-400 bg-transparent block w-full px-3 py-1.5 border-b-2 outline-none rounded transition";
  
  const Textarea: React.FC<TextareaProps> = (props: TextareaProps) => {
    return (
      <div className="mb-6">
        <textarea
          className={props.textareaStyle === "basic" ? basicClassName : undefined}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.placeholder}
        />
      </div>
    );
  };
  
  export default Textarea;