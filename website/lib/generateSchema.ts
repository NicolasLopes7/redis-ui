type ParsedValue =
  | {
      type: 'string';
      value: string;
    }
  | {
      type: 'number';
      value: number;
    }
  | {
      type: 'null';
    }
  | {
      type: 'boolean';
      value: boolean;
    }
  | {
      type: 'object';
      value: object;
      properties: Record<string, ParsedValue>;
    }
  | {
      type: 'array';
      value: unknown[];
      items: ParsedValue[];
    };

export const getSchema = (value: unknown): ParsedValue => {
  const type = typeof value;

  if (type === 'function' || type === 'symbol' || type === 'bigint') throw new Error('Invalid type');

  if (type === 'object') {
    if (value === null || typeof value === 'undefined') {
      return {
        type: 'null'
      };
    }

    if (Array.isArray(value)) {
      return { type: 'array', value, items: value.map(getSchema) };
    }

    const properties = Object.entries(value as object);

    return {
      type: 'object',
      value,
      properties: properties.reduce(
        (acc, [key, propertyValue]) => ({
          ...acc,
          [key]: getSchema(propertyValue)
        }),
        {} as Record<string, ParsedValue>
      )
    };
  }

  if (type === 'string')
    return {
      type: 'string',
      value: value as string
    };

  if (type === 'number')
    return {
      type: 'number',
      value: value as number
    };

  if (type === 'boolean') {
    return {
      type: 'boolean',
      value: value as boolean
    };
  }

  throw new Error('Undefined here?');
};
