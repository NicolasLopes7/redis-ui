import { z } from 'zod';

export const connectionURLSchema = z.object({
  url: z.string().regex(/redis:\/\/(?:.*@)?.*:\d*(?:\/\d)?/, { message: 'Not recognized redis pattern' })
});

export type ConnectionURL = z.infer<typeof connectionURLSchema>;
