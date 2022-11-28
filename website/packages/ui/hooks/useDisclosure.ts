import { useMemo, useState } from 'react';

type Options = {
  defaultIsOpen: boolean;
};

export const useDisclosure = ({ defaultIsOpen }: Options = { defaultIsOpen: false }) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const helpers = useMemo(() => {
    return {
      onChange: setIsOpen,
      onToggle: () => setIsOpen((open) => !open),
      onOpen: () => setIsOpen(true),
      onClose: () => setIsOpen(false)
    };
  }, []);

  return {
    isOpen,
    ...helpers
  };
};
