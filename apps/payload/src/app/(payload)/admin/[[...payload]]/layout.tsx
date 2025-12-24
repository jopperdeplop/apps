import { RootLayout } from '@payloadcms/next/layouts'
import { ReactNode } from 'react'
import config from '@/payload.config'
import './custom.css'

type Args = {
    children: any
    params: Promise<any>
}

const Layout = ({ children }: Args) => (
    // @ts-expect-error Async Server Component
    <RootLayout config={config}>
        {children}
    </RootLayout>
)

export default Layout
