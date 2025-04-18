import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
};

const Button = ({ text, className, ...rest }: Props) => {
  return (
    <button
      className={clsx(
        "text-black py-2 px-4 rounded cursor-pointer transition-hover duration-150",
        className
      )}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
