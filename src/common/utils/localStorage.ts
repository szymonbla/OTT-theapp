function getItem(itemKey: string) {
  const saved = window.localStorage.getItem(itemKey);
  return saved ? JSON.parse(saved) : undefined;
}

function saveItem(itemKey: string, value: unknown) {
  const stringValue = JSON.stringify(value);
  return window.localStorage.setItem(itemKey, stringValue);
}

function clearItem(itemKey: string) {
  return window.localStorage.removeItem(itemKey);
}

export { getItem, saveItem, clearItem };
