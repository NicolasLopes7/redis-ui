import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NewConnection, newConnectionSchema } from '../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { GearIcon, GlobeIcon, LetterCaseCapitalizeIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import { Card, Flex, TextInput, ToggleArea } from '@redis-ui/ui';

type Props = {
  onSubmit: (data: NewConnection) => void;
};

// eslint-disable-next-line react/function-component-definition
export const NewConnectionForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<NewConnection>({
    resolver: zodResolver(newConnectionSchema)
  });

  console.log({ errors });

  return (
    <Flex direction={'column'} as="form" gap={'md'} css={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="md" wrap="wrap" css={{ width: '100%' }}>
        <TextInput
          containerCss={{ flex: '7', width: '100%', minWidth: '300px' }}
          LeftIcon={<GlobeIcon />}
          {...register('data.host')}
          placeholder="Host"
        />
        <TextInput
          containerCss={{ flex: '3', width: '100%', minWidth: '120px' }}
          LeftIcon={<GearIcon />}
          {...register('data.port', { setValueAs: Number })}
          placeholder="Port"
          type={'number'}
        />
      </Flex>
      <TextInput LeftIcon={<PersonIcon />} {...register('data.username')} placeholder="Username" />
      <TextInput LeftIcon={<LockClosedIcon />} {...register('data.password')} type="password" placeholder="Password" />

      <Controller
        control={control}
        name="metadata.saveConnection"
        render={({ field: { value, onChange, name } }) => (
          <ToggleArea id={name} onChange={onChange} checked={value} title="Save Connection?">
            <TextInput
              LeftIcon={<LetterCaseCapitalizeIcon />}
              {...register('metadata.connectionName')}
              placeholder="Connection Name"
            />
          </ToggleArea>
        )}
      />

      <Card.Footer>
        <Card.FooterActions>
          <Card.FooterAction>Connect</Card.FooterAction>
        </Card.FooterActions>
      </Card.Footer>
    </Flex>
  );
};
