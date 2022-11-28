import { z } from 'zod';
import { connectionSchema } from './connection';

const connectionRegex = /redis:\/\/(?:(?<user>.+):)?(?:(?<password>.+)@)?(?<host>.*):(?<port>\d+)\/?(?<database>\d+)?/;

export const connectionURLSchema = z.object({
  url: z
    .string()
    .regex(connectionRegex)
    .refine(
      (url) => {
        const matchResult = url.match(connectionRegex);
        if (!matchResult) return false;

        const result = connectionSchema.safeParse({ data: matchResult.groups, metadata: {} });
        if (!result.success) {
          return false;
        }

        return true;
      },
      { message: 'Invalid url' }
    )
});

export type ConnectionURL = z.infer<typeof connectionURLSchema>;
