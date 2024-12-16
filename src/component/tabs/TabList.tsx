import React, { RefObject, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const TabList: React.FC<Props> = ({ children }) => {
  const [tabs] = useState<RefObject<HTMLButtonElement>[] | null | undefined>(
    React.Children.map(children, () => React.createRef()) ?? [],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const currentFocus = document.activeElement;
      const currentTab = tabs?.find((tab) => tab?.current === currentFocus);
      const currentIndex = currentTab ? tabs?.indexOf(currentTab) : 0;

      if (e.key === 'ArrowRight') {
        const nextTab =
          tabs?.[((currentIndex ?? 0) + 1) % (tabs?.length || 1)]?.current;
        nextTab?.focus();
      } else if (e.key === 'ArrowLeft') {
        const previousTab =
          tabs?.[
            ((currentIndex ?? 0) - 1 + (tabs?.length || 1)) %
              (tabs?.length || 1)
          ]?.current;
        previousTab?.focus();
      }
    }
  };

  return (
    <div
      role="tablist"
      className="flex flex-wrap gap-4"
      onKeyDown={handleKeyDown}
    >
      {React.Children.map(
        children,
        (child, index) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            ...child.props,
            ref: tabs?.[index],
          }),
      )}
    </div>
  );
};
