import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import config from '@/payload.config'
import './custom.css'
import { importMap as rawImportMap } from '../importMap'

const Layout = async ({ children, params }: any) => {
    const resolvedParams = await params

    // Ensure importMap is serializable for Next.js 15 but functional for Payload
    const importMap = {
        ...rawImportMap,
        toJSON() {
            return Object.fromEntries(Object.keys(rawImportMap).map((key) => [key, null]))
        },
    }

    return (
        /* @ts-ignore */
        <RootLayout
            config={config}
            importMap={importMap}
            serverFunction={importMap}
            params={resolvedParams}
        >
            {children}
        </RootLayout>
    )
}

export default Layout
