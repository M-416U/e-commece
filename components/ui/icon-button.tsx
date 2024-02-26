import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

type IconButtonProps = {
  className?: string;
  icon: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const IconButton = ({ icon, onClick, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center bg-white hover:scale-110 transition rounded-full p-2",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
