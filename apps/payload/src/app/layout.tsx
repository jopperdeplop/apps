import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
    title: 'Saleor App - Payload CMS',
    description: 'Payload CMS integration for Saleor',
}

export default function RootLayout({
    children,
}: {
    children: any
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
