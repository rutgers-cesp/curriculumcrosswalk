import { CourseDirectory } from '@/types'
import { readFile } from 'fs/promises'
import { Metadata } from 'next'
import DirectoryTable from './components/DirectoryTable'

export const metadata: Metadata = {
    title: 'CS Curriculum Crosswalk | Directory',
    description: 'Rugters University Computer Science Curriculum Crosswalk',
}

const sections = [
    {
        sectionId: 'fundamentals',
        sectionTitle: 'Programming Fundamentals',
    },
    {
        sectionId: 'design',
        sectionTitle: 'Design & Animation',
    },
    {
        sectionId: 'applications',
        sectionTitle: 'Applications of Computing',
    },
    {
        sectionId: 'concepts',
        sectionTitle: 'Computing Concepts',
    },
]

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
            <div className="mb-3 mt-6">
                <h1 className="text-2xl font-semibold">Directory of Concepts</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium">Note: </span> The location where concepts are first introduced is
                    included in the directory below. Note that in some instances, concepts may be referenced or
                    revisited later in the curriculum.
                </p>
                <p className="mt-3 text-sm text-muted-foreground sm:mt-0">
                    <span className="font-medium">Note: </span> Google CS First is not included in the directory of
                    concepts, as educators will likely not use all units in instruction, and units of the same
                    difficulty level may cover slightly different concepts.
                </p>
            </div>
            <div className="mb-3 space-y-12">
                {sections.map(({ sectionId, sectionTitle }) => (
                    <DirectoryTable
                        key={sectionId}
                        section={directoryOfConcepts[sectionId]}
                        sectionTitle={sectionTitle}
                    />
                ))}
            </div>
        </main>
    )
}
