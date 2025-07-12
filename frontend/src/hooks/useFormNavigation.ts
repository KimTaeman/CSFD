/**
 * lets u press Enter to jump to next input or run a fn on last field
 */
import { useRef, useCallback } from 'react';
import type { KeyboardEvent } from 'react';

export function useFormNavigation<T extends string>(fieldKeys: T[]) {
  const inputRefs = useRef<Record<T, HTMLInputElement | null>>(
    {} as Record<T, HTMLInputElement | null>,
  );

  const setInputRef = useCallback((key: T, element: HTMLInputElement | null) => {
    inputRefs.current[key] = element;
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>, currentField: T, onLastField?: () => void) => {
      if (event.key !== 'Enter') return;

      event.preventDefault();
      const currentIndex = fieldKeys.indexOf(currentField);
      const nextField = fieldKeys[currentIndex + 1];

      nextField ? inputRefs.current[nextField]?.focus() : onLastField?.();
    },
    [fieldKeys],
  );

  return { setInputRef, handleKeyDown };
}
