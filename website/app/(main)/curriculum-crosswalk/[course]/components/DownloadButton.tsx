'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export default function DownloadButton({ summaryUrl }: { summaryUrl: string }) {
    return (
        <Button
            variant="secondary"
            className="w-full text-wrap"
            onClick={() => {
                window.open(summaryUrl)
            }}
        >
            <Download className="mr-3 h-4 w-4" />
            Course Summary
        </Button>
    )
}
