import { RootLayout } from '@payloadcms/next/layouts'
import { ReactNode } from 'react'
import config from '@/payload.config'
import './custom.css'

import { importMap } from '../importMap.js'

type Args = {
    children: any
    params: Promise<any>
}

const Layout = ({ children }: Args) => (
    // @ts-expect-error Async Server Component
    <RootLayout config={config} importMap={importMap}>
        {children}
    </RootLayout>
)

export default Layout
