import React from 'react';
import { Control, Controller, FormState, UseFormRegister } from 'react-hook-form';
import { NewConnection } from '../schemas';
import { GearIcon, GlobeIcon, LetterCaseCapitalizeIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import { Flex, TextInput, ToggleArea } from '@redis-ui/ui';

type Props = {
  register: UseFormRegister<NewConnection>;
  control: Control<NewConnection>;
  formState: FormState<NewConnection>;
};

// eslint-disable-next-line react/function-component-definition
export const NewConnectionForm = ({ register, control, formState: { errors } }: Props) => {
  return (
    <Flex direction={'column'} gap={'md'} css={{ width: '100%' }}>
      <Flex gap="md" wrap="wrap" css={{ width: '100%' }}>
        <TextInput
          containerCss={{ flex: '7', width: '100%', minWidth: '300px' }}
          LeftIcon={<GlobeIcon />}
          {...register('data.host')}
          placeholder="Host"
          error={errors.data?.host?.message}
        />
        <TextInput
          containerCss={{ flex: '3', width: '100%', minWidth: '120px' }}
          LeftIcon={<GearIcon />}
          {...register('data.port', { setValueAs: (value) => (value ? Number(value) : undefined) })}
          placeholder="Port"
          type={'number'}
          error={errors.data?.port?.message}
        />
      </Flex>
      <TextInput
        LeftIcon={<PersonIcon />}
        error={errors.data?.database?.message}
        {...register('data.database')}
        placeholder="Username"
      />
      <TextInput
        LeftIcon={<LockClosedIcon />}
        error={errors.data?.password?.message}
        {...register('data.password')}
        type="password"
        placeholder="Password"
      />

      <Controller
        control={control}
        name="metadata.saveConnection"
        render={({ field: { value, onChange, name } }) => (
          <ToggleArea id={name} onChange={onChange} checked={value} title="Save Connection?">
            <TextInput
              LeftIcon={<LetterCaseCapitalizeIcon />}
              {...register('metadata.connectionName')}
              placeholder="Connection Name"
              error={errors.metadata?.connectionName?.message}
            />
          </ToggleArea>
        )}
      />
    </Flex>
  );
};
