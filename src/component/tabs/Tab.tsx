import React from 'react';
import classNames from 'classnames';

interface Props {
  id: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const Tab = React.forwardRef<HTMLButtonElement, Props>(
  ({ isActive, children, onClick, id }, ref) => {
    return (
      <button
        id={id}
        type="button"
        role="tab"
        aria-selected={isActive}
        ref={ref}
        onClick={onClick}
        tabIndex={isActive ? 0 : -1}
        className={classNames(
          'rounded-md p-2 leading-none outline-offset-2',
          isActive
            ? 'bg-fieryRed text-white outline-brand font-bold'
            : 'bg-alabasterPink text-charcoalBlue',
        )}
      >
        {children}
      </button>
    );
  },
);
