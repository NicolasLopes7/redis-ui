import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { useConnectionURL } from './hooks/useConnectionURL';
import { useNavigate } from 'react-router-dom';
import { Card } from './components/Card';

function App() {
  const navigate = useNavigate();
  const { getConnectionURL, connect } = useConnectionURL();
  const [connectionURL, setConnectionURL] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const initialURL = getConnectionURL();

    if (initialURL) {
      setConnectionURL(initialURL);
      navigate('/redis');
    }
  }, []);

  const handleChangeURL = (e: ChangeEvent<HTMLInputElement>) => {
    setConnectionURL(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      new URL(connectionURL);
      await connect(connectionURL);
      navigate('/redis');
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor="#242424"
      width="100vw"
      height="100vh"
      gap={10}
    >
      <Heading color="white" opacity={0.8}>
        Redis UI
      </Heading>
      <Card>
        <Flex flexDirection="row" alignItems="center" justifyContent="space-around" gap={4}>
          <Input
            type="url"
            required={true}
            placeholder="Type your connection URL"
            variant="baseDarkInput"
            name="connectionURL"
            value={connectionURL}
            onChange={handleChangeURL}
          />
          <Button onClick={handleSubmit} variant="baseDarkButton">
            Connect
          </Button>
        </Flex>
        {error && (
          <Flex>
            <Text size="sm" color="red">
              {error}
            </Text>
          </Flex>
        )}
      </Card>
    </Flex>
  );
}

export default App;
