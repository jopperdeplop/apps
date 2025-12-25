import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import configPromise from '@/payload.config'
import './custom.css'
import { importMap as rawImportMap } from '../importMap'

const Layout = ({ children }: any) => {
    // ULTRA-PRECISE DIAGNOSTIC PROXY
    // This proxy will catch exactly when and where Next.js tries to serialize a function
    const diagnosticImportMap = new Proxy(rawImportMap, {
        get(target, prop) {
            const value = Reflect.get(target, prop)

            // If Next.js or React tries to access a function during serialization
            if (typeof value === 'function') {
                console.log(`--- SERIALIZATION ATTEMPT DETECTED ---`)
                console.log(`Property accessed: ${String(prop)}`)
                try {
                    // This will show us the call stack leading to the serialization
                    throw new Error('Serialization Trace')
                } catch (e: any) {
                    console.log('Stack Trace:', e.stack)
                }
                console.log(`-------------------------------------`)
            }
            return value
        }
    })

    return (
        /* @ts-ignore */
        <RootLayout config={configPromise} importMap={diagnosticImportMap} serverFunction={diagnosticImportMap}>
            {children}
        </RootLayout>
    )
}

export default Layout
