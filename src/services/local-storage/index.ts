type TItemKey = 'langCode';

const read = async <T = any>(key: TItemKey) => {
  const value = window.localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : undefined;
};

const create = async <T = any>(key: TItemKey, value: T) => window.localStorage.setItem(key, JSON.stringify(value));

const update = async <T = any>(key: TItemKey, value: T) => {
  await deleteItem(key);
  await create(key, value);
};

const deleteItem = async (key: TItemKey) => window.localStorage.removeItem(key);

export const LocalStorageService = {
  read,
  create,
  update,
  delete: deleteItem,
};
