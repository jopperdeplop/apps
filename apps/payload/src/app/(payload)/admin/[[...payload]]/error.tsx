'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: any) {
    useEffect(() => {
        console.error('Payload Admin Error:', error)
    }, [error])

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Something went wrong in the Admin Panel</h2>
            <p>{error?.message || 'Check the console for more details.'}</p>
            <button onClick={() => reset()} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                Try again
            </button>
        </div>
    )
}
