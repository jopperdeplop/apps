import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import config from '@/payload.config'
import './custom.css'
import { importMap } from '../importMap'

const Layout = ({ children }: any) => {
    return (
        /* @ts-ignore */
        <RootLayout config={config} importMap={importMap} serverFunction={importMap}>
            {children}
        </RootLayout>
    )
}

export default Layout
