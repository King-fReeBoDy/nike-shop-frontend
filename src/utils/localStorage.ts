type ILocalStorageUser = {
  id: number;
  email: string;
  role: string;
  image: string;
  accessToken: string;
};

export const saveToLocalStorage = (user: ILocalStorageUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getFromLocalStorage = (): ILocalStorageUser | [] => {
  const storage = localStorage.getItem("user");
  if (storage === null) return [];
  return JSON.parse(storage);
};
