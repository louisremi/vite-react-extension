import { useStorage } from '~/hooks/useStorage';

export function useStorageDemo() {
  return useStorage('webext-demo', 'Storage Demo');
}