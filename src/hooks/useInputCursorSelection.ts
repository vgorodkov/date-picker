import { ChangeEvent, useState } from 'react';

interface CursorPosition {
  start: number;
  end: number;
}

export const useInputCursorSelection = (cursorRanges: CursorPosition[]) => {
  const [inputCursorSelection, setInputCursorSelection] = useState<CursorPosition>({
    start: 0,
    end: 0,
  });

  const onInputSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { selectionStart } = e.target;
    if (selectionStart === null) {
      return;
    }

    const newCursor = cursorRanges.find((range) => {
      return selectionStart >= range.start && selectionStart <= range.end;
    });

    if (newCursor) {
      setInputCursorSelection(newCursor);
    }
  };

  return { inputCursorSelection, onInputSelect };
};
