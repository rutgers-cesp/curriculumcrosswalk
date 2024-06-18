'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const pages = [
    {
        title: 'About',
        href: '/',
    },
    {
        title: 'Curriculum Crosswalk',
        href: '/curriculum-crosswalk',
    },
    {
        title: 'Directory of Concepts',
        href: '/directory-concepts',
    },
]

export default function Navbar() {
    const pathname = usePathname()
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6S">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-8 md:text-sm lg:gap-10">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                    <Logo />
                    <span className="sr-only">Rutgers University</span>
                </Link>
                {pages.map(({ title, href }) => (
                    <Link
                        href={href}
                        key={title}
                        className={cn(
                            href === pathname ? 'text-foreground' : 'text-muted-foreground',
                            'transition-colors hover:text-foreground',
                        )}
                    >
                        {title}
                    </Link>
                ))}
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                            <Logo /> <span className="sr-only">Rutgers University</span>
                        </Link>
                        {pages.map(({ title, href }) => (
                            <Link
                                href={href}
                                key={title}
                                className={cn(
                                    href === pathname ? 'text-foreground' : 'text-muted-foreground',
                                    'text-muted-foreground transition-colors hover:text-foreground',
                                )}
                            >
                                {title}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}
