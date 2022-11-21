import React from 'react';
import { Control, Controller, FormState, UseFormRegister } from 'react-hook-form';
import { Connection } from '../../schemas';
import { CubeIcon, GearIcon, GlobeIcon, LetterCaseCapitalizeIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { Flex, Stack, TextInput, ToggleArea } from '@redis-ui/ui';

type Props = {
  register: UseFormRegister<Connection>;
  control: Control<Connection>;
  formState: FormState<Connection>;
};

// eslint-disable-next-line react/function-component-definition
export const SetupConnectionForm = ({ register, control, formState: { errors } }: Props) => {
  return (
    <Stack direction={'column'} spacing={'md'} width="full">
      <Stack spacing="md" direction={'row'} wrap width="full">
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
          {...register('data.port')}
          placeholder="Port"
          type={'number'}
          error={errors.data?.port?.message}
        />
      </Stack>
      <TextInput
        LeftIcon={<CubeIcon />}
        error={errors.data?.database?.message}
        {...register('data.database')}
        placeholder="Database"
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
              {...register('metadata.name')}
              placeholder="Connection Name"
              error={errors.metadata?.name?.message}
            />
          </ToggleArea>
        )}
      />
    </Stack>
  );
};
