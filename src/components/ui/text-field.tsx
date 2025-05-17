mport * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckIcon, AlertTriangle, Eye, EyeOff } from "lucide-react"

const textFieldVariants = cva(
  "flex flex-col w-full",
  {
    variants: {
      size: {
        small: "",
        default: "",
        large: "",
        flexible: "",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const inputSizeVariants = cva(
  "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        small: "h-8 px-3 py-1 text-xs",
        default: "h-10 px-3 py-2 text-base md:text-sm",
        large: "h-12 px-4 py-3 text-lg md:text-base",
        flexible: "min-h-[40px] px-3 py-2",
      },
      state: {
        default: "border-input bg-background",
        valid: "border-green-500 bg-background",
        error: "border-destructive bg-destructive/5",
        disabled: "border-input bg-muted opacity-50",
      },
    },
    defaultVariants: {
      size: "default",
      state: "default",
    },
  }
)

const labelSizeVariants = cva(
  "text-sm font-medium",
  {
    variants: {
      size: {
        small: "text-xs",
        default: "text-sm",
        large: "text-base",
        flexible: "text-sm",
      },
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-destructive",
        false: "",
      },
      disabled: {
        true: "text-muted-foreground",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      required: false,
      disabled: false,
    },
  }
)

const helperTextVariants = cva(
  "text-xs mt-1",
  {
    variants: {
      state: {
        default: "text-muted-foreground",
        error: "text-destructive",
      },
      disabled: {
        true: "opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      state: "default",
      disabled: false,
    },
  }
)

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textFieldVariants> {
  label?: string;
  helperText?: string;
  valid?: boolean;
  error?: boolean | string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  characterLimit?: number;
  showPasswordToggle?: boolean;
  prefixText?: string;
  suffixText?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ 
    className, 
    size = "default", 
    label,
    helperText,
    valid,
    error,
    disabled,
    required,
    leftIcon,
    rightIcon,
    inputClassName,
    labelClassName,
    helperTextClassName,
    placeholder,
    type = "text",
    characterLimit,
    value,
    showPasswordToggle = false,
    prefixText,
    suffixText,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [charCount, setCharCount] = React.useState(typeof value === 'string' ? value.length : 0);
    const [inputType, setInputType] = React.useState(type);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Use the provided ref or our internal one
    const combinedRef = React.useMemo(() => {
      if (ref) {
        return typeof ref === 'function' 
          ? (node: HTMLInputElement) => {
              inputRef.current = node;
              ref(node);
            }
          : { current: ref.current };
      }
      return inputRef;
    }, [ref]);

    // Determine the input state
    const inputState = React.useMemo(() => {
      if (disabled) return "disabled";
      if (error) return "error";
      if (valid) return "valid";
      return "default";
    }, [disabled, error, valid]);

    // Toggle password visibility
    const togglePasswordVisibility = React.useCallback(() => {
      setShowPassword(prev => !prev);
      setInputType(prev => prev === "password" ? "text" : "password");
    }, []);
    
    // Handle character count
    const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setCharCount(inputValue.length);
      
      // If we have a character limit, enforce it
      if (characterLimit && inputValue.length > characterLimit) {
        e.target.value = inputValue.slice(0, characterLimit);
      }
      
      props.onChange?.(e);
    }, [characterLimit, props]);

    return (
      <div className={cn(textFieldVariants({ size }), className)}>
        {label && (
          <Label 
            htmlFor={props.id} 
            className={cn(
              labelSizeVariants({ 
                size, 
                required, 
                disabled 
              }),
              labelClassName
            )}
          >
            {label}
            {valid && !disabled && (
              <CheckIcon className="inline-block ml-1 h-4 w-4 text-green-500" />
            )}
            {error && !disabled && (
              <AlertTriangle className="inline-block ml-1 h-4 w-4 text-destructive" />
            )}
          </Label>
        )}
        
        <div className="relative mt-1.5">
          {/* Left Icon or Prefix Text */}
          {(leftIcon || prefixText) && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
              {prefixText && <span className="text-gray-500">{prefixText}</span>}
            </div>
          )}
          
          <Input
            ref={combinedRef}
            id={props.id}
            type={inputType}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            className={cn(
              inputSizeVariants({ 
                size,
                state: inputState,
              }),
              leftIcon && "pl-10",
              prefixText && "pl-[calc(0.75rem+var(--prefix-width,0px))]",
              (rightIcon || showPasswordToggle) && "pr-10",
              suffixText && "pr-[calc(0.75rem+var(--suffix-width,0px))]",
              inputClassName
            )}
            value={value}
            onChange={handleChange}
            style={{
              "--prefix-width": prefixText ? `${prefixText.length * 0.5}rem` : "0px",
              "--suffix-width": suffixText ? `${suffixText.length * 0.5}rem` : "0px"
            } as React.CSSProperties}
            {...props}
          />
          
          {/* Right Icon, Password Toggle, or Suffix Text */}
          {(rightIcon || (showPasswordToggle && type === "password") || suffixText) && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {suffixText && <span className="text-gray-500 mr-1">{suffixText}</span>}
              
              {showPasswordToggle && type === "password" && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              )}
              
              {rightIcon && !showPasswordToggle && rightIcon}
            </div>
          )}
        </div>
        
        {/* Helper Text and Character Count */}
        <div className="flex justify-between mt-1">
          {(helperText || error) && (
            <span 
              className={cn(
                helperTextVariants({ 
                  state: error ? "error" : "default",
                  disabled 
                }),
                helperTextClassName
              )}
            >
              {typeof error === 'string' ? error : helperText}
            </span>
          )}
          
          {characterLimit && (
            <div className={cn(
              "text-xs text-right",
              charCount > characterLimit ? "text-destructive" : "text-muted-foreground"
            )}>
              {charCount}/{characterLimit}
            </div>
          )}
        </div>
      </div>
    )
  }
)

TextField.displayName = "TextField"

export { TextField, textFieldVariants }
