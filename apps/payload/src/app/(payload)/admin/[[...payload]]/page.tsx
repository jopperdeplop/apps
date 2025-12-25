import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@/payload.config'
import { importMap } from '../importMap'

export const generateMetadata = ({ params, searchParams }: any) => {
    return generatePageMetadata({ config, params, searchParams })
}

const Page = ({ params, searchParams }: any) => {
    console.log('--- PAYLOAD ADMIN PAGE DEBUG ---')
    console.log('Calling RootPage with ImportMap keys:', importMap ? Object.keys(importMap).length : 0)

    return (
        /* @ts-ignore */
        RootPage({ config, params, searchParams, importMap })
    )
}

export default Page
