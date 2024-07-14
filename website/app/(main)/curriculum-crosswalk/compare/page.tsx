import { Button } from '@/components/ui/button'
import { CourseReview } from '@/types'
import { readFile } from 'fs/promises'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import path from 'path'
import CompareCard from './components/CompareCard'
import CompareCourses from './components/CompareCourses'

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const pathname = path.join(process.cwd(), 'public/data/curriculum_crosswalk.json')
    const res = await readFile(pathname, 'utf8')
    const data: CourseReview[] = JSON.parse(res)

    const selected = searchParams.selected
    if (!selected) redirect('/curriculum-crosswalk')

    if (typeof selected === 'string') {
        const selectedCourse = data.find((course) => course.title === selected)

        if (!selectedCourse) {
            throw new Error('Sorry, something went wrong!')
        }

        return (
            <main className="flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6">
                <div className="mb-3 mt-6">
                    <div className="mb-3">
                        <Link href="/curriculum-crosswalk">
                            <Button variant={'link'} className="pl-0">
                                <Undo2 className="mr-3 h-4 w-4" />
                                Back to Curriculum Crosswalk
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">Comparing 1 Course</h1>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                        <span className="font-medium">Note: </span>A course's programming language includes the [PP]
                        flag to designate Proprietary Platform. This means that code written in this course would not
                        run elsewhere without significant modifications or installations.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                        <span className="font-medium">Note: </span>If you can't see the that you've chosen to compare,
                        try using the horizontal scrollbar!
                    </p>
                </div>

                <div>
                    <CompareCard course={selectedCourse} />
                </div>
            </main>
        )
    }

    const courseData = data.filter((course) => selected.includes(course.title))

    return (
        <main className="flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6">
            <div className="">
                <div className="mb-3">
                    <Link href="/curriculum-crosswalk">
                        <Button variant={'link'} className="pl-0">
                            <Undo2 className="mr-3 h-4 w-4" />
                            Back to Curriculum Crosswalk
                        </Button>
                    </Link>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold">Comparing {courseData.length} Courses</h1>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium">Note: </span>A course's programming language includes the [PP] flag to
                    designate Proprietary Platform. This means that code written in this course would not run elsewhere
                    without significant modifications or installations.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium">Note: </span>If you can't see all the courses that you've chosen to
                    compare, try using the horizontal scrollbar!
                </p>
            </div>
            <CompareCourses courseData={courseData} />
        </main>
    )
}
