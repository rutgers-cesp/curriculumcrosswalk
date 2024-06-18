import { CourseDirectory } from '@/types'
import { readFile } from 'fs/promises'
import DirectoryTable from './components/DirectoryTable'

export default async function Page() {
    const res = await readFile('public/data/directory_of_concepts.json', 'utf8')
    const data: CourseDirectory[] = JSON.parse(res)
    const course = data[0]

    const directoryOfConcepts: Record<string, any> = {}

    for (const category in course) {
        const concept = data.map((course) => {
            // @ts-ignore
            return { title: course.title, concept: course[category] }
        })
        directoryOfConcepts[category] = concept
    }

    return (
        <main className="flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6">
            <div className="">
                <h1 className="text-lg font-semibold md:text-2xl">Directory of Concepts</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni amet itaque excepturi culpa
                    minima nobis officiis eligendi optio beatae rem repellendus velit tenetur, ea cum veritatis?
                    Quaerat, hic id.
                </p>
            </div>
            <div>
                <DirectoryTable />
            </div>
        </main>
    )
}
