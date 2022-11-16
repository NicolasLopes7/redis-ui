import { z } from 'zod';

export const newConnectionSchema = z.object({
  data: z.object({
    host: z.string(),
    port: z.number({ required_error: 'Port is required' }),

    username: z.string().min(3, 'Username must contain at least 3 characters'),
    password: z.string()
  }),
  metadata: z.object({
    saveConnection: z.boolean().optional(),
    connectionName: z.string().optional()
  })
});

export type NewConnection = z.infer<typeof newConnectionSchema>;
