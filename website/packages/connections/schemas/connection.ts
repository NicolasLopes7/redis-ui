import { z } from 'zod';

export const connectionSchema = z.object({
  data: z.object({
    host: z.string({ required_error: 'Host is required' }).min(1, 'Host is required'),
    port: z.string({ required_error: 'Port is required' }).min(1, 'Port is required'),

    database: z.string(),
    password: z.string().optional()
  }),
  metadata: z.object({
    saveConnection: z.boolean().optional(),
    connectionName: z.string().optional()
  })
});

export type Connection = z.infer<typeof connectionSchema>;
