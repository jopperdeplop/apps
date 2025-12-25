import { NextResponse } from 'next/server'

export async function GET() {
    const host = process.env.NEXT_PUBLIC_SERVER_URL ||
        (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : '')

    const manifest = {
        id: 'saleor.app.payload',
        version: '1.0.0',
        name: 'Payload CMS',
        permissions: [],
        appUrl: `${host}/admin`,
        tokenTargetUrl: `${host}/api/register`,
        extensions: [
            {
                label: 'Payload Admin',
                mount: 'NAVIGATION_CATALOG',
                target: 'APP_PAGE',
                url: '/admin',
            },
        ],
    }

    return NextResponse.json(manifest)
}
