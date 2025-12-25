import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import config from '@/payload.config'
import './custom.css'
import { importMap as rawImportMap } from '../importMap'

const Layout = async ({ children }: any) => {
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
            serverFunction={importMap as any}
        >
            {children}
        </RootLayout>
    )
}

export default Layout
