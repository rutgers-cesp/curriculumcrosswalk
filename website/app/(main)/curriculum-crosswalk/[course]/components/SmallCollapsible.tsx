'use client'

import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

export default function SmallCollapsible({ header, children }: { header: string; children: React.ReactNode }) {
    const [show, setShow] = useState(true)
    return (
        <div className="w-full">
            <div
                onClick={() => setShow((prev) => !prev)}
                className="flex cursor-pointer items-center justify-between pb-2 transition-all hover:border-b-2 hover:pb-3"
            >
                <h2 className="text-lg font-semibold md:text-xl">{header}</h2>
                <ChevronDownIcon className={cn('h-8 w-8 text-black transition-all', show && 'rotate-180')} />
            </div>
            {show && children}
        </div>
    )
}
