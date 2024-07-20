import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Rocket } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Collapsible from './components/Collapsible'

export const metadata: Metadata = {
    title: 'CS Curriculum Crosswalk | About',
    description: 'Rugters University Computer Science Curriculum Crosswalk',
}

function CurriculumCrosswalkCTA() {
    return (
        <Card className="w-full max-w-2xl bg-blue-50">
            <CardHeader>
                <CardTitle className="text-blue-800">Ready to research CS courses?</CardTitle>
                <CardDescription className="text-blue-700">
                    Go to the Curriculum Crosswalk and compare CS courses now!
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button variant="outline" className="w-full text-blue-700 hover:text-blue-800" asChild>
                    <Link href="/curriculum-crosswalk">
                        <Rocket className="mr-3 h-4 w-4" /> Let's Go
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

const fields = [
    {
        title: 'Curriculum URL',
        content:
            'Direct link to curriculum or provider’s webpage (note: single-clicking on the cell will open the link in your default browser)',
    },
    {
        title: 'Course Description',
        content: 'A brief description of each curriculum, as available from the provider',
    },
    {
        title: 'Suggested Grades',
        content: 'Appropriate grade levels for curriculum use',
    },
    {
        title: 'Total Hours',
        content:
            'Total number of instructional hours, as reported by the curriculum provider or estimated based on available information',
    },
    {
        title: 'Price',
        content: 'The cost to a school/educator for classroom use of the curriculum',
    },
    {
        title: 'Platform',
        content: 'The method that students interact with curricular materials',
    },
    {
        title: 'Programming Language',
        content: 'The method that students interact with curricular materials',
    },
    {
        title: 'Platform',
        content:
            "The programming language that students learn through use of the curriculum, as applicable (Note: A course's programming language includes the [PP] flag to designate Proprietary Platform. This means that code written in this course, if copied and pasted into an external IDE, would not run without significant modifications or installations.)",
    },
    {
        title: 'Device Compatibility',
        content: 'Devices supported for accessing the curriculum',
    },
    {
        title: 'Auto-grading Capability',
        content: 'The extent to which the curriculum automatically grades student work',
    },
    {
        title: 'Course Lens',
        content:
            'A brief explanation of the ways that computer science topics are explored and presented to students, such as through game design or storytelling',
    },
    {
        title: 'Standards Alignment',
        content: 'Whether or not the curriculum aligns to computer science standards, as applicable',
    },
    {
        title: 'Structure',
        content: 'The way that each curriculum is organized into lessons, activities, units, and the like',
    },
    {
        title: 'Sequencing',
        content:
            'Information on whether the curriculum must be followed in order or if there is flexibility in sequencing',
    },
    {
        title: '(Suggested) Sequencing Detail',
        content: 'Suggested order of curricular materials',
    },
    {
        title: 'Lesson Structure',
        content: 'General structure/components of a class session, including what is made available to educators',
    },
    {
        title: 'Training Available',
        content:
            'Professional learning opportunities available to educators to support curriculum implementation (from the provider only)',
    },
    {
        title: 'Funding Information',
        content:
            'Organizations or mechanisms by which the curriculum received funding for its development and/or maintenance',
    },
    {
        title: 'Date(s) Modified',
        content:
            'The approximate year in which the curriculum was developed, and the frequency of updates or last update year, if relevant',
    },
    {
        title: 'Spotlight',
        content: 'An explanation of an innovative, creative, or otherwise important aspect of the curriculum',
    },
    {
        title: 'Expert Take',
        content: 'Thoughts from experienced CS faculty on the curriculum and its suitability in various settings',
    },
    {
        title: 'Course Summary',
        content:
            'An attached document with a more detailed outline of each course, organized using each curriculum’s own structure',
    },
]

export default async function Page() {
    return (
        <main className="mb-6 mt-6 flex flex-1 flex-col items-center gap-3 space-y-6 p-4 lg:gap-6 lg:p-6">
            <div className="w-2xl max-w-2xl">
                <Image
                    src="/images/curriculum-crosswalk-banner.png"
                    alt="Rutgers U Curriculum Crosswalk"
                    width={4001}
                    height={1030}
                />
            </div>
            <div className="w-2xl max-w-2xl">
                <h2 className="text text-2xl font-semibold">Introduction</h2>
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
            <Collapsible header="Curriculum Selection & Review Methodology">
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
            </Collapsible>
            <Collapsible header="Explanation of Fields">
                <>
                    <p className="mt-3 text-base text-muted-foreground">
                        Brief descriptions of each field contained in the Curriculum Crosswalk table are listed below.
                    </p>
                    <ul className="mt-3 flex list-inside list-disc flex-col gap-2">
                        {fields.map((field, id) => {
                            return (
                                <li key={id} className="text-muted-foreground">
                                    <span className="font-semibold">{field.title}:</span> {field.content}
                                </li>
                            )
                        })}
                    </ul>
                </>
            </Collapsible>
            <div className="my-3 w-full max-w-2xl">
                <CurriculumCrosswalkCTA />
            </div>

            <div className="w-2xl max-w-2xl">
                <h2 className="text text-2xl font-semibold">Disclaimer</h2>
                <p className="mt-3 text-base text-muted-foreground">
                    Although careful efforts were made in gathering and reviewing publicly available information and
                    artifacts, we cannot guarantee the accuracy of all content within this tool as information and
                    available documentation may change over time. Reasonable measures were taken in interpreting
                    available materials, though we encourage users to verify information central to their use cases.
                </p>
                <p className="mt-3 text-base text-muted-foreground">Last updated at 4/16/2024.</p>
            </div>
        </main>
    )
}
