import { CourseReview } from '@/types'
import { readFile } from 'fs/promises'
import { Metadata } from 'next'
import ToggleGrid from './components/ToggleGrid'

export const metadata: Metadata = {
    title: 'CS Curriculum Crosswalk | Crosswalk',
    description: 'Rugters University Computer Science Curriculum Crosswalk',
}

export default async function Page() {
    const res = await readFile('public/data/curriculum_crosswalk.json', 'utf8')
    const data: CourseReview[] = JSON.parse(res)
    data.sort((a, b) => a.title.localeCompare(b.title))

    return (
        <main className="flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6">
            <div className="mb-3 mt-6">
                <div>
                    <h1 className="text-2xl font-semibold">Curriculum Crosswalk</h1>
                </div>
                <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
                    Research and compare computer science curricula for introductory middle school courses.
                </p>
            </div>

            <div>
                <ToggleGrid courses={data} />
            </div>
        </main>
    )
}
