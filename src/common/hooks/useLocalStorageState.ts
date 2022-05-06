import { useState, useEffect } from 'react';

import { getItem, saveItem } from 'common/utils/localStorage';

export function useLocalStorageState(storageKey: string, defaultState: unknown) {
  const storedState = getItem(storageKey);

  const [localState, setLocalState] = useState(storedState || defaultState);

  useEffect(() => {
    saveItem(storageKey, localState);
  }, [localState, storageKey]);

  return [localState, setLocalState];
}
