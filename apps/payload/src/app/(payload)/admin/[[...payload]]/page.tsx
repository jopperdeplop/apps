import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@/payload.config'
import { importMap } from '../importMap'

export const generateMetadata = ({ params, searchParams }: any) => {
    return generatePageMetadata({ config, params, searchParams })
}

const Page = ({ params, searchParams }: any) => {
    return (
        /* @ts-ignore */
        RootPage({ config, params, searchParams, importMap })
    )
}

export default Page
