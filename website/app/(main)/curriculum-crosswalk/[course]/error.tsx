'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
            <h2 className="text-center text-xl font-semibold">{error.message}</h2>
            <Button onClick={() => reset()}>Try again</Button>
        </div>
    )
}
