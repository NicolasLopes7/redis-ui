import { z } from 'zod';

export const newConnectionSchema = z.object({
  data: z.object({
    host: z.string(),
    port: z.number({ required_error: 'Port is required' }),

    database: z.string({ required_error: 'Database is required' }),
    password: z.string().optional()
  }),
  metadata: z.object({
    saveConnection: z.boolean().optional(),
    connectionName: z.string().optional()
  })
});

export type NewConnection = z.infer<typeof newConnectionSchema>;