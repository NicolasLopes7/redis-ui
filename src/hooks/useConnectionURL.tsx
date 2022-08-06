import { invoke } from '@tauri-apps/api/tauri';

type UseConnectionURL = {
  getConnectionURL: () => string;
  connect: (newConnectionURL: string) => Promise<string>;
  disconnect: () => Promise<void>;
};
export const useConnectionURL = (): UseConnectionURL => {
  const getConnectionURL = () => localStorage.getItem('@redis-ui/connectionURL') ?? '';

  const connect = async (newConnectionURL: string) => {
    // localStorage.setItem('@redis-ui/connectionURL', newConnectionURL);
    const result = await invoke(
      'get_all_keys'
      // { connectionURL: newConnectionURL }
    );
    console.log('result: ', result);
    // if (!result) {
    //   throw new Error("We can't connect on your redis with that link!");
    // }
    return newConnectionURL;
  };

  const disconnect = async () => {
    localStorage.removeItem('@redis-ui/connectionURL');
    await invoke('disconnect');
  };

  return { getConnectionURL, connect, disconnect };
};
