import { CourseReview } from '@/types'
import { readFile } from 'fs/promises'

export default async function Page({ params }: { params: { course: string } }) {
    const courseTitle = decodeURIComponent(params.course)
    const res = await readFile('public/data/curriculum_crosswalk.json', 'utf8')
    const data: CourseReview[] = JSON.parse(res)

    const courseData = data.find((course) => course.title === courseTitle)

    if (!courseData) {
        throw new Error('Sorry, something went wrong!')
    }

    return (
        <main className="flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6">
            <div className="">
                <h1 className="text-lg font-semibold md:text-2xl">{courseData.title}</h1>
                <p className="mt-3 text-sm text-muted-foreground">{courseData.description}</p>
            </div>
            <div></div>
        </main>
    )
}

function CourseSection({ section, content }: { section: string; content: string }) {
    return (
        <div>
            <h3>World</h3>
            <p>Hi</p>
        </div>
    )
}
