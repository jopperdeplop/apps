import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@/payload.config'
import { importMap as rawImportMap } from '../importMap'

export const generateMetadata = ({ params, searchParams }: any) => {
    return generatePageMetadata({ config, params, searchParams })
}

const Page = ({ params, searchParams }: any) => {
    // Apply the same diagnostic to the Page entry point
    const diagnosticImportMap = new Proxy(rawImportMap, {
        get(target, prop) {
            const value = Reflect.get(target, prop)
            if (typeof value === 'function') {
                console.log(`--- PAGE SERIALIZATION ATTEMPT: ${String(prop)} ---`)
            }
            return value
        }
    })

    return (
        /* @ts-ignore */
        RootPage({ config, params, searchParams, importMap: diagnosticImportMap })
    )
}

export default Page
