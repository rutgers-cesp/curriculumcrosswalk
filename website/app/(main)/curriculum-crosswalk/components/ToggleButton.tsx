import { ArrowRight, Plus, X } from 'lucide-react'
import Link from 'next/link'

export default function ToggleButton({
    compareMode,
    numCourses,
    handleToggle,
    continueParams,
}: {
    compareMode: boolean
    numCourses: number
    handleToggle: () => void
    continueParams: string[]
}) {
    if (compareMode && numCourses === 0) {
        return (
            <div className="fixed bottom-6 right-6 z-10">
                <div className="hidden gap-3 xs:flex">
                    <button
                        onClick={handleToggle}
                        type="button"
                        className="rounded-full bg-red-600 p-4 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        <X className="h-4 w-4" aria-hidden="true" />
                    </button>

                    <button
                        type="button"
                        disabled
                        className="flex cursor-not-allowed items-center gap-2 rounded-full border border-input bg-background px-5 py-3 text-sm font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground"
                    >
                        Select courses to continue
                    </button>
                </div>
                <div className="flex flex-col gap-3 xs:hidden">
                    <button
                        onClick={handleToggle}
                        type="button"
                        className="rounded-full bg-red-600 p-4 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <button
                        type="button"
                        className="cursor-not-allowed rounded-full border border-input bg-background p-4 shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </div>
        )
    }
    if (compareMode) {
        return (
            <div className="fixed bottom-6 right-6 z-10">
                <div className="hidden gap-3 xs:flex">
                    <button
                        onClick={handleToggle}
                        type="button"
                        className="rounded-full bg-red-600 p-4 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <Link href={{ pathname: '/curriculum-crosswalk/compare', query: { selected: continueParams } }}>
                        <button
                            onClick={handleToggle}
                            type="button"
                            className="flex items-center gap-2 rounded-full border border-input bg-background px-5 py-3 text-sm font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground"
                        >
                            <ArrowRight className="h-4 w-4" />
                            Compare {numCourses} Courses {numCourses === 4 && '(Max)'}
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col gap-3 xs:hidden">
                    <button
                        onClick={handleToggle}
                        type="button"
                        className="rounded-full bg-red-600 p-4 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <button
                        onClick={handleToggle}
                        type="button"
                        className="rounded-full border border-input bg-background p-4 shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </div>
        )
    }
    return (
        <div className="fixed bottom-6 right-6 z-10">
            <button
                onClick={handleToggle}
                type="button"
                className="hidden gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 xs:flex"
            >
                <Plus className="h-5 w-5" aria-hidden="true" />
                Compare Courses
            </button>
            <button
                onClick={handleToggle}
                type="button"
                className="rounded-full bg-red-600 p-4 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 xs:hidden"
            >
                <Plus className="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
    )
}
