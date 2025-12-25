'use client'

import { useEffect } from 'react'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error with all possible metadata
        console.error('--- GLOBAL ERROR DETECTED ---')
        console.error('Message:', error.message)
        console.error('Stack:', error.stack)
        console.error('Digest:', error.digest)
        console.error('-----------------------------')
    }, [error])

    return (
        <html>
            <body>
                <div style={{
                    padding: '4rem',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    color: '#000',
                    minHeight: '100vh',
                    fontFamily: 'system-ui'
                }}>
                    <h1>Critical Application Error</h1>
                    <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
                        We've encountered a serialization or runtime error that prevented the app from booting.
                    </p>
                    {error.digest && (
                        <p><strong>Error ID:</strong> {error.digest}</p>
                    )}
                    <button
                        onClick={() => reset()}
                        style={{
                            marginTop: '2rem',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer'
                        }}
                    >
                        Refresh Application
                    </button>
                </div>
            </body>
        </html>
    )
}
