import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'CS Curriculum Crosswalk | About',
    description: 'Rugters University Computer Science Curriculum Crosswalk',
}

export function CurriculumCrosswalkCTA() {
    return (
        <Alert className="w-2xl bg-red-50">
            <Rocket className="h-4 w-4 !text-red-600" />
            <AlertTitle className="text-red-800">Ready to research CS courses?</AlertTitle>
            <AlertDescription className="mb-3 text-red-700">
                Go to the Curriculum Crosswalk and compare CS courses now!
            </AlertDescription>
            <Link href="/curriculum-crosswalk">
                <Button variant="outline">Let's Go</Button>
            </Link>
        </Alert>
    )
}

const fields = [
    'Curriculum URL: direct link to curriculum or provider’s webpage (note: single-clicking on the cell will open the link in your default browser)',
    'Course Description: a brief description of each curriculum, as available from the provider',
    'Suggested Grades: appropriate grade levels for curriculum use',
    'Total Hours: total number of instructional hours, as reported by the curriculum provider or estimated based on available information',
    'Price: the cost to a school/educator for classroom use of the curriculum',
    'Platform: the method that students interact with curricular materials',
    "Programming Language: the programming language that students learn through use of the curriculum, as applicable (Note: A course's programming language includes the [PP] flag to designate Proprietary Platform. This means that code written in this course, if copied and pasted into an external IDE, would not run without significant modifications or installations.)",
    'Device Compatibility: devices supported for accessing the curriculum.',
    'Auto-grading Capability: the extent to which the curriculum automatically grades student work',
    'Course Lens: a brief explanation of the ways that computer science topics are explored and presented to students, such as through game design or storytelling',
    'Standards Alignment: whether or not the curriculum aligns to computer science standards, as applicable ',
    'Structure: the way that each curriculum is organized into lessons, activities, units, and the like',
    'Sequencing: information on whether the curriculum must be followed in order or if there is flexibility in sequencing ',
    '(Suggested) Sequencing Detail: suggested order of curricular materials',
    'Lesson Structure: general structure/components of a class session, including what is made available to educators ',
    'Training Available: professional learning opportunities available to educators to support curriculum implementation (from the provider only)',
    'Funding Information: organizations or mechanisms by which the curriculum received funding for its development and/or maintenance',
    'Date(s) Modified: the approximate year in which the curriculum was developed, and the frequency of updates or last update year, if relevant',
    'Spotlight: an explanation of an innovative, creative, or otherwise important aspect of the curriculum ',
    'Expert Take: thoughts from experienced CS faculty on the curriculum and its suitability in various settings',
    'Course Summary: an attached document with a more detailed outline of each course, organized using each curriculum’s own structure',
]

export default async function Page() {
    return (
        <main className="mb-6 mt-6 flex flex-1 flex-col items-center gap-3 p-4 lg:gap-6 lg:p-6">
            <div className="mx-auto">
                <h1 className="text-xl font-semibold md:text-3xl">
                    Middle School Introductory CS Curriculum Crosswalk
                </h1>
            </div>
            <div className="w-2xl max-w-2xl">
                <h2 className="text text-xl font-semibold">Introduction</h2>
                <p className="mt-3 text-base text-muted-foreground">
                    Finding the right introductory computer science curriculum for middle school students is crucial for
                    educators. The Rutgers Middle School Introductory CS Curriculum Crosswalk has been developed to
                    simplify this process by providing detailed information on nine different curricula. This tool helps
                    teachers by presenting key facts about each option, including how computer science is taught,
                    whether through games, storytelling, or other engaging methods.
                </p>
                <p className="mt-3 text-base text-muted-foreground">
                    The crosswalk offers a clear course description from each curriculum provider, access to their
                    website, details about the curriculum's structure, the programming languages used, and how the
                    lessons are organized. It also covers practical details like the cost for classroom use, how the
                    curriculum was funded, how often it's updated, and what kind of training is available for teachers.
                    This straightforward approach allows educators to quickly compare different curricula, understand
                    what each one offers, and decide which is best suited to their students' needs and their teaching
                    goals.
                </p>
            </div>
            <div className="w-2xl max-w-2xl">
                <h2 className="text text-xl font-semibold">Curriculum Selection & Review Methodology</h2>
                <p className="mt-3 text-base text-muted-foreground">
                    The selection of curricula for this tool was guided by a comprehensive web search targeting middle
                    school computer science course curricula. The top 200 search results were considered, which were
                    then examined for inclusion based on several criteria: the researchers' familiarity with the
                    curriculum, its popularity, and the availability of materials for review. Only curricula
                    specifically designed for middle school students were considered. Furthermore, to qualify, a
                    curriculum had to be intended for use in a classroom setting as a complete program, rather than
                    offering isolated lessons or materials that could be selectively incorporated into an existing
                    course. When a provider offered multiple qualifying curricula, the earliest (in course sequence)
                    introductory course was selected for inclusion. It's important to note that some curricula were not
                    included in this tool due to the absence of freely accessible documents online for review. The
                    information presented in the tool was derived from documents or lesson plans publicly available
                    online, with reasonable assumptions made based on the documentation available.
                </p>
            </div>
            <div className="w-2xl max-w-2xl">
                <h2 className="text text-xl font-semibold">Explanation of Fields</h2>
                <p className="mt-3 text-base text-muted-foreground"></p>
                <p className="mt-3 text-base text-muted-foreground">
                    Brief descriptions of each field contained in the Curriculum Crosswalk table are listed below.
                </p>
                <ul className="mt-3 flex list-disc flex-col gap-2">
                    {fields.map((field, id) => {
                        return (
                            <li key={id} className="text-muted-foreground">
                                {field}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="w-2xl my-3 max-w-2xl">
                <CurriculumCrosswalkCTA />
            </div>

            <div className="w-2xl max-w-2xl">
                <h2 className="text text-xl font-semibold">Disclaimer</h2>
                <p className="mt-3 text-base text-muted-foreground"></p>
                <p className="mt-3 text-base text-muted-foreground">
                    Although careful efforts were made in gathering and reviewing publicly available information and
                    artifacts, we cannot guarantee the accuracy of all content within this tool as information and
                    available documentation may change over time. Reasonable measures were taken in interpreting
                    available materials, though we encourage users to verify information central to their use cases.
                </p>
            </div>
        </main>
    )
}
