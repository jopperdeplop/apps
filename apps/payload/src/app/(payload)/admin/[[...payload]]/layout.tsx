import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import config from '@/payload.config'
import './custom.css'
import { importMap } from '../importMap'

const Layout = ({ children, params }: any) => {
    // DEBUG LOGGING
    console.log('--- PAYLOAD ADMIN LAYOUT DEBUG ---')
    console.log('ImportMap type:', typeof importMap)
    if (importMap) {
        const keys = Object.keys(importMap)
        console.log('ImportMap Keys count:', keys.length)
        console.log('First 5 keys:', keys.slice(0, 5))

        // Check for functions which cause the serialization error
        const functionKeys = keys.filter(k => typeof (importMap as any)[k] === 'function')
        if (functionKeys.length > 0) {
            console.error('CRITICAL: ImportMap contains raw functions! Keys:', functionKeys.slice(0, 10))
        }
    }
    console.log('---------------------------------')

    return (
        /* @ts-ignore */
        <RootLayout config={config} importMap={importMap}>
            {children}
        </RootLayout>
    )
}

export default Layout
