import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
/* @not-actually-types-but-importing-anyway-to-make-it-work */
import config from '@/payload.config'

import { importMap } from '../importMap.js'

type Args = {
    params: Promise<any>
    searchParams: Promise<any>
}

export const generateMetadata = ({ params, searchParams }: Args) =>
    generatePageMetadata({ config, params, searchParams, importMap: importMap as any } as any)

const Page = ({ params, searchParams }: Args) => RootPage({ config, params, searchParams, importMap: importMap as any } as any)

export default Page
