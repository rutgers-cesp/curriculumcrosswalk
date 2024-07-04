import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { CourseReview } from '@/types'
import { readFile } from 'fs/promises'
import { redirect } from 'next/navigation'
import path from 'path'
import CompareCard from './components/CompareCard'

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    console.log(process.cwd(), 'DAREN TEST')
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
                <div className="">
                    <div>
                        <h1 className="text-lg font-semibold md:text-2xl">Comparing 1 Course</h1>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                        <span className="font-medium">Note: </span>A course's programming language includes the [PP]
                        flag to designate Proprietary Platform. This means that code written in this course would not
                        run elsewhere without significant modifications or installations.
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
                <div>
                    <h1 className="text-lg font-semibold md:text-2xl">Comparing {courseData.length} Courses</h1>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium">Note: </span>A course's programming language includes the [PP] flag to
                    designate Proprietary Platform. This means that code written in this course would not run elsewhere
                    without significant modifications or installations.
                </p>
            </div>

            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                    {courseData.map((course) => {
                        return <CompareCard course={course} />
                    })}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </main>
    )
}
