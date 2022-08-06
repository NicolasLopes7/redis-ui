import { Flex } from '@chakra-ui/react';

export const Card = ({ children, ...props }) => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      padding={16}
      borderRadius={8}
      backgroundColor="#323232"
      shadow="0 20px 20px 1px rgba(0,0,0,0.3)"
      gap={4}
      {...props}
    >
      {children}
    </Flex>
  );
};
