'use client'

import { cn } from '@/lib/utils'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default function Collapsible({ header, children }: { header: string; children: React.ReactNode }) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-2xl w-full max-w-2xl">
            <div
                onClick={() => setShow((prev) => !prev)}
                className="flex cursor-pointer items-center justify-between pb-2 transition-all hover:border-b-2 hover:pb-3"
            >
                <h2 className="text text-2xl font-semibold">{header}</h2>
                <ChevronDownIcon className={cn('h-8 w-8 text-black transition-all', show && 'rotate-180')} />
            </div>
            {show && children}
        </div>
    )
}
