import type { Config } from 'drizzle-kit';
export default {
  schema: './src/drizzle/schema/models/*',
  out: './src/drizzle/schema/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
} satisfies Config;
