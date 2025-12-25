import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        autoLogin: {
            email: 'admin@saleor.io',
            password: 'testadminpayload',
            prefillOnly: true,
        },
    },
    collections: [
        {
            slug: 'users',
            auth: true,
            fields: [],
        },
        {
            slug: 'media',
            upload: true,
            fields: [
                {
                    name: 'alt',
                    type: 'text',
                },
            ],
        },
        {
            slug: 'pages',
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                    unique: true,
                },
                {
                    name: 'content',
                    type: 'richText',
                },
            ],
        },
    ],
    editor: lexicalEditor({}),
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : ''),
    secret: process.env.PAYLOAD_SECRET || 'REPLACE_WITH_SECURE_SECRET',
    cors: [process.env.NEXT_PUBLIC_SERVER_URL, 'https://dashboard.saleor.io', 'https://*.saleor.cloud'].filter(Boolean) as string[],
    csrf: [process.env.NEXT_PUBLIC_SERVER_URL, 'https://dashboard.saleor.io', 'https://*.saleor.cloud'].filter(Boolean) as string[],
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL || '',
        },
    }),
    plugins: [
        vercelBlobStorage({
            collections: {
                media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],
})
