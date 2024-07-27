import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CourseReview } from '@/types'
import { readFile } from 'fs/promises'
import { ArrowLeft, ArrowRight, Paperclip, SquareArrowOutUpRight, Undo2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CourseCardDescription } from '../components/CrosswalkGrid'
import DownloadButton from './components/DownloadButton'
import SmallCollapsible from './components/SmallCollapsible'

function splitOrderedListString(text: string): string[] {
    const items = text
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean)
    return items
}
export default async function Page({ params }: { params: { course: string } }) {
    const courseTitle = decodeURIComponent(params.course)
    const res = await readFile('public/data/curriculum_crosswalk.json', 'utf8')
    const data: CourseReview[] = JSON.parse(res)
    data.sort((a, b) => a.title.localeCompare(b.title))

    const courseData = data.find((course) => course.title === courseTitle)

    if (!courseData) {
        throw new Error('Sorry, something went wrong!')
    }

    const index = data.indexOf(courseData)
    const prevIndex = index - 1 >= 0 ? index - 1 : data.length - 1
    const nextIndex = index + 1 < data.length ? index + 1 : 0

    const prevTitle = data[prevIndex].title
    const nextTitle = data[nextIndex].title

    const courseSections = [
        {
            title: 'Platform',
            content: courseData.platform,
        },
        {
            title: 'Programming Language',
            content: courseData.programming_language,
        },
        {
            title: 'Device Compatibility',
            content: courseData.device_compatibility,
        },
        {
            title: 'Auto-Grading Availability',
            content: courseData.auto_grading_availability,
        },
        {
            title: 'Date Modified',
            content: courseData.date_modified,
        },
        {
            title: 'Funding Information',
            content: courseData.funding_info,
        },
        {
            title: 'Lesson Structure',
            content: courseData.lesson_structure,
        },
    ]

    const longCourseSections = [
        {
            title: 'Course "Lens"',
            content: courseData.course_lens,
        },
        {
            title: 'Standards Alignment',
            content: courseData.CSTA_standards,
        },
        {
            title: 'Structure',
            content: courseData.course_structure,
        },
        {
            title: 'Training Available',
            content: courseData.training_info,
        },
        {
            title: 'Spotlight',
            content: (
                <div>
                    <div className="mb-6">
                        <div className="mb-3 flex items-center gap-3">
                            <span className="font-medium">Spotlight: </span>
                            <Badge className="bg-yellow-400 text-foreground hover:bg-yellow-400">
                                {courseData.spotlight_header}
                            </Badge>
                        </div>

                        <p>{courseData.spotlight}</p>
                    </div>
                    {courseData.honorable_mention && (
                        <div className="mb-6">
                            <div className="mb-3 flex items-center gap-3">
                                <span className="font-medium">Honorable Mention: </span>
                                <Badge className="bg-green-300 text-foreground hover:bg-green-300">
                                    {courseData.honorable_mention_header}
                                </Badge>
                            </div>
                            <p>{courseData.honorable_mention}</p>
                        </div>
                    )}
                    {courseData.spotlight_great && (
                        <div>
                            <span className="font-medium">What makes it great: </span>
                            <p className="mt-3">{courseData.spotlight_great}</p>
                        </div>
                    )}
                </div>
            ),
        },
        {
            title: 'Expert Take',
            content: courseData.expert_take,
        },
    ]

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
                <h1 className="text-2xl font-semibold">Course Details</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium">Note: </span>A course's programming language includes the [PP] flag to
                    designate Proprietary Platform. This means that code written in this course would not run elsewhere
                    without significant modifications or installations.
                </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:justify-center">
                <div className="flex gap-3 md:flex-col">
                    <Card className="flex h-60 flex-col xs:w-60">
                        <div className="flex flex-1 items-center justify-center">
                            <Image
                                className="mx-auto h-24 w-auto"
                                src={courseData.image_url}
                                alt={courseData.title}
                                height={150}
                                width={150}
                            />
                        </div>
                        <CardFooter className="w-full">
                            <Button variant="secondary" className="w-full" asChild>
                                <Link href={courseData.course_url} target="_blank">
                                    <SquareArrowOutUpRight className="mr-3 h-4 w-4" />
                                    Visit Site
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex h-60 w-32 flex-col xs:w-60">
                        <div className="flex flex-1 items-center justify-center">
                            <Paperclip className="h-8 w-8" />
                        </div>
                        <CardFooter className="w-full">
                            <DownloadButton summaryUrl={courseData.summary_url} />
                        </CardFooter>
                    </Card>
                </div>

                <Card className="w-full max-w-3xl">
                    <CardHeader className="space-y-6">
                        <CardTitle className="text-wrap text-left text-2xl">{courseData.title}</CardTitle>
                        <CardDescription className="text-base">
                            {courseData.description}
                            <CourseCardDescription
                                suggestedGrades={courseData.suggested_grades}
                                totalHours={courseData.total_hours}
                                price={courseData.price}
                            />
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="mt-6 flex flex-col gap-8">
                            {courseSections.map((section, id) => {
                                return <CourseSection key={id} title={section.title} content={section.content} />
                            })}
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-6 bg-gray-500/5 pt-8">
                        <SmallCollapsible header="Course Sequencing">
                            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                                <span className="font-medium">Note: </span>
                                {courseData.sequencing}
                            </p>
                            <div className="mt-3 max-w-2xl text-base text-muted-foreground">
                                {splitOrderedListString(courseData.sequencing_details).map((listItem, id) => {
                                    return <p key={id}>{listItem}</p>
                                })}
                            </div>
                        </SmallCollapsible>

                        {longCourseSections.map((section, id) => {
                            return (
                                <SmallCollapsible key={id} header={section.title}>
                                    <div className="mt-3 max-w-2xl text-base text-muted-foreground">
                                        {section.content}
                                    </div>
                                </SmallCollapsible>
                            )
                        })}
                    </CardFooter>
                </Card>
            </div>
            <div className="mb-3 mt-3 flex flex-col justify-between gap-3 xs:mt-6 xs:flex-row xs:gap-0">
                <Link href={`/curriculum-crosswalk/${encodeURIComponent(prevTitle)}`}>
                    <Button variant="secondary" className="w-full xs:w-fit xs:min-w-40">
                        <ArrowLeft className="mr-3 h-4 w-4" />
                        Previous Course
                    </Button>
                </Link>
                <Link href={`/curriculum-crosswalk/${encodeURIComponent(nextTitle)}`}>
                    <Button variant="secondary" className="w-full xs:w-fit xs:min-w-40">
                        Next Course
                        <ArrowRight className="ml-3 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </main>
    )
}

function CourseSection({ title, content }: { title: string; content: string }) {
    return (
        <div key={title} className="flex flex-col justify-between lg:flex-row">
            <h3 className="text-wrap text-lg font-medium md:text-xl">{title}</h3>
            <p className="mt-1 w-full text-wrap text-muted-foreground lg:w-96">{content}</p>
        </div>
    )
}
