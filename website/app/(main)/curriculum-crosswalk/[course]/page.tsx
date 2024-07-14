import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CourseReview } from '@/types'
import { readFile } from 'fs/promises'
import { Paperclip, SquareArrowOutUpRight, Undo2 } from 'lucide-react'
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

    const courseData = data.find((course) => course.title === courseTitle)

    if (!courseData) {
        throw new Error('Sorry, something went wrong!')
    }

    const courseSections = [
        {
            title: 'Platform:',
            content: courseData.platform,
        },
        {
            title: 'Programming Language:',
            content: courseData.programming_language,
        },
        {
            title: 'Device Compatibility:',
            content: courseData.device_compatibility,
        },
        {
            title: 'Auto-Grading Availability:',
            content: courseData.auto_grading_availability,
        },
        {
            title: 'Date Modified:',
            content: courseData.date_modified,
        },
        {
            title: 'Funding Information:',
            content: courseData.funding_info,
        },
        {
            title: 'Lesson Structure:',
            content: courseData.lesson_structure,
        },
    ]

    const longCourseSections = [
        {
            title: 'Course "Lens":',
            content: courseData.course_lens,
        },
        {
            title: 'Standards Alignment:',
            content: courseData.CSTA_standards,
        },
        {
            title: 'Structure:',
            content: courseData.course_structure,
        },
        {
            title: 'Training Available:',
            content: courseData.training_info,
        },
        {
            title: 'Spotlight:',
            content: courseData.spotlight,
        },
        {
            title: 'Expert Take:',
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
            <div className="flex flex-col gap-3 md:flex-row">
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

                <Card className="w-full">
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
                        <div className="flex flex-col gap-3 lg:mt-6 lg:w-[600px] lg:gap-8">
                            {courseSections.map((section, id) => {
                                return <CourseSection key={id} title={section.title} content={section.content} />
                            })}
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-6 bg-gray-500/5 pt-8">
                        <SmallCollapsible header="Course Sequencing: ">
                            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                                <span className="font-medium">Note: </span>
                                {courseData.sequencing}
                            </p>
                            <div className="mt-3 max-w-2xl text-base text-muted-foreground">
                                {splitOrderedListString(courseData.sequencing_details).map((listItem, id) => {
                                    return <p>{listItem}</p>
                                })}
                            </div>
                        </SmallCollapsible>

                        {longCourseSections.map((section, id) => {
                            return (
                                <SmallCollapsible key={id} header={section.title}>
                                    <p className="mt-3 max-w-2xl text-base text-muted-foreground">{section.content}</p>
                                </SmallCollapsible>
                            )
                        })}
                        {/* {
            title: 'Sequencing:',
            content: ,
        },
        {
            title: 'Suggested Sequencing Detail:',
            content: courseData.sequencing_details,
        }, */}
                    </CardFooter>
                </Card>
            </div>
        </main>
    )
}

function CourseSection({ title, content }: { title: string; content: string }) {
    return (
        <div key={title} className="flex flex-col justify-between lg:flex-row">
            <h3 className="text-wrap text-lg font-medium md:text-xl">{title}</h3>
            <p className="mt-1 w-72 text-wrap text-muted-foreground">{content}</p>
        </div>
    )
}
