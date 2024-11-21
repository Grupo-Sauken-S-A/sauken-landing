import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InnerContainerProps {
   children: ReactNode;
   className?: string;
   symetric?: boolean;
}

export const InnerContainer = ({ children, symetric = false, className}:InnerContainerProps) => {
  const symetricClass = symetric ? 'px-[3%] sm:px-[5%] xl:px-[8%]' : 'pl-[3%] sm:pl-[5%] xl:pl-[8%]';
  return (
    <div className={cn(`inner-container relative ${symetricClass}`,className)}>{children}</div>
  )
}