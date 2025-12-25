import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@/payload.config'
import { importMap as rawImportMap } from '../importMap'

export const generateMetadata = async ({ params, searchParams }: any) => {
    return generatePageMetadata({ config, params: await params, searchParams: await searchParams })
}

const Page = async ({ params, searchParams }: any) => {
    const resolvedParams = await params
    const resolvedSearchParams = await searchParams

    // CONFIDENT FIX: Prevent Next.js 15 from trying to serialize functions
    const importMap = {
        ...rawImportMap,
        toJSON() {
            return Object.fromEntries(Object.keys(rawImportMap).map((key) => [key, null]))
        },
    }

    return (
        /* @ts-ignore */
        RootPage({
            config,
            params: resolvedParams,
            searchParams: resolvedSearchParams,
            importMap
        })
    )
}

export default Page
