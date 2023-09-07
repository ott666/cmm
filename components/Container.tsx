import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        'h-full w-full px-2 sm:px-10 xl:px-40 2xl:px-[150px]',
        rest.className
      )}
    >
      {children}
    </div>
  );
};
