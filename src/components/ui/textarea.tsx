
import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  valid?: boolean;
  characterLimit?: number;
  resize?: boolean | "horizontal" | "vertical" | "none";
  helperText?: string;
  size?: "default" | "small" | "large";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    error, 
    valid, 
    characterLimit, 
    resize = true, 
    helperText,
    size = "default",
    ...props 
  }, ref) => {
    const [characterCount, setCharacterCount] = React.useState(0);
    const resizeClass = 
      resize === true ? "resize" 
      : resize === "horizontal" ? "resize-x" 
      : resize === "vertical" ? "resize-y" 
      : "resize-none";
    
    const sizeClass = 
      size === "small" ? "min-h-[60px]" 
      : size === "large" ? "min-h-[120px]" 
      : "min-h-[80px]";

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setCharacterCount(value.length);
      
      if (characterLimit && value.length > characterLimit) {
        e.target.value = value.slice(0, characterLimit);
        setCharacterCount(characterLimit);
      }
      
      // Call the original onChange if it exists
      if (props.onChange) {
        props.onChange(e);
      }
    };

    React.useEffect(() => {
      if (props.value && typeof props.value === 'string') {
        setCharacterCount(props.value.length);
      }
    }, [props.value]);

    const validClass = valid ? "border-green-500 focus-visible:ring-green-500" : "";
    const errorClass = error ? "border-red-500 focus-visible:ring-red-500" : "";
    const disabledClass = props.disabled ? "bg-gray-100 cursor-not-allowed opacity-50" : "";

    return (
      <div className="space-y-1">
        <textarea
          className={cn(
            "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            resizeClass,
            sizeClass,
            validClass,
            errorClass,
            disabledClass,
            className
          )}
          ref={ref}
          onChange={handleChange}
          {...props}
        />
        <div className="flex justify-between text-xs">
          {helperText && (
            <span className={cn(
              "text-muted-foreground",
              error ? "text-red-500" : "",
              valid ? "text-green-500" : ""
            )}>
              {helperText}
            </span>
          )}
          {characterLimit && (
            <span className={cn(
              "text-muted-foreground ml-auto",
              characterCount >= characterLimit ? "text-red-500" : ""
            )}>
              {characterCount}/{characterLimit}
            </span>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
