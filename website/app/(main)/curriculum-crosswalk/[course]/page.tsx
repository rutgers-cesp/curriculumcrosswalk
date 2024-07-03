import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CourseReview } from '@/types'
import { readFile } from 'fs/promises'
import { Paperclip, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import DownloadButton from './components/DownloadButton'

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
            title: 'Suggested Grades:',
            content: courseData.suggested_grades,
        },
        {
            title: 'Total Hours:',
            content: courseData.total_hours,
        },
        {
            title: 'Price:',
            content: courseData.price,
        },
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
            title: 'Sequencing:',
            content: courseData.sequencing,
        },
        {
            title: 'Suggested Sequencing Detail:',
            content: courseData.sequencing_details,
        },
        {
            title: 'Lesson Structure:',
            content: courseData.lesson_structure,
        },
        {
            title: 'Training Available:',
            content: courseData.training_info,
        },
        {
            title: 'Funding Information:',
            content: courseData.funding_info,
        },
        {
            title: 'Date Modified:',
            content: courseData.date_modified,
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
            <div className="">
                <h1 className="text-lg font-semibold md:text-2xl">Course Details</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium">Note: </span>A course's programming language includes the [PP] flag to
                    designate Proprietary Platform. This means that code written in this course would not run elsewhere
                    without significant modifications or installations.
                </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
                <div className="flex gap-3 md:flex-col">
                    <Card className="xs:w-60 flex h-60 flex-col">
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
                    <Card className="xs:w-60 flex h-60 w-32 flex-col">
                        <div className="flex flex-1 items-center justify-center">
                            <Paperclip className="h-8 w-8" />
                        </div>
                        <CardFooter className="w-full">
                            <DownloadButton summaryUrl={courseData.summary_url} />
                        </CardFooter>
                    </Card>
                </div>

                <Card className="w-full">
                    <CardHeader>
                        <Link href={courseData.course_url} target="_blank">
                            <Button className="h-fit p-0 pb-3" variant={'link'}>
                                <CardTitle className="text-wrap text-left text-xl">{courseData.title}</CardTitle>
                                <SquareArrowOutUpRight className="ml-3 hidden h-4 w-4 md:block" />
                            </Button>
                        </Link>
                        <CardDescription>{courseData.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                            {courseSections.map((section, id) => {
                                return <CourseSection key={id} title={section.title} content={section.content} />
                            })}
                        </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </main>
    )
}

function CourseSection({ title, content }: { title: string; content: string }) {
    return (
        <div key={title}>
            <h3 className="text-wrap text-lg font-medium md:text-xl">{title}</h3>
            <p className="mt-1 text-wrap text-muted-foreground">{content}</p>
        </div>
    )
}
