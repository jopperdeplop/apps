import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import config from '@/payload.config'
import './custom.css'
import { importMap as rawImportMap } from '../importMap'

const Layout = async ({ children, params }: any) => {
    // Next 15 requires awaiting params
    const resolvedParams = await params

    // CONFIDENT FIX: Prevent Next.js 15 from trying to serialize functions
    // We provide a toJSON method so Next.js sees a safe version of the object,
    // but Payload's server-side logic still sees the raw functions.
    const importMap = {
        ...rawImportMap,
        toJSON() {
            return Object.fromEntries(Object.keys(rawImportMap).map((key) => [key, null]))
        },
    }

    return (
        /* @ts-ignore */
        <RootLayout config={config} importMap={importMap} params={resolvedParams}>
            {children}
        </RootLayout>
    )
}

export default Layout
