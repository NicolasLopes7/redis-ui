import { z } from 'zod';

export const newConnectionSchema = z.object({
  data: z.object({
    host: z.string(),
    port: z.number(),

    username: z.string(),
    password: z.string()
  }),
  metadata: z.object({
    saveConnection: z.boolean().optional(),
    connectionName: z.string().optional()
  })
});

export type NewConnection = z.infer<typeof newConnectionSchema>;
