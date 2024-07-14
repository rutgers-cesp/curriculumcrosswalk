import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CourseReview } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { CourseCardDescription } from '../../components/CrosswalkGrid'

export default function CompareCard({ course }: { course: CourseReview }) {
    const compareCardFields = [
        {
            title: 'Platform:',
            content: course.platform,
        },
        {
            title: 'Programming Language:',
            content: course.programming_language,
        },
        {
            title: 'Device Compatibility:',
            content: course.device_compatibility,
        },
        {
            title: 'Auto-Grading Availability:',
            content: course.auto_grading_availability,
        },
        {
            title: 'Standards Alignment:',
            content: course.CSTA_standards,
        },
        {
            title: 'Sequencing:',
            content: course.sequencing,
        },
        {
            title: 'Training Available:',
            content: course.training_info,
        },
        {
            title: 'Funding Information:',
            content: course.funding_info,
        },
        {
            title: 'Date Modified:',
            content: course.date_modified,
        },
    ]

    return (
        <Card className="flex w-96 shrink-0 flex-col text-wrap">
            <CardHeader className="flex-1">
                <div>
                    <Image
                        className="mb-3 h-12 w-auto"
                        src={course.image_url}
                        alt={course.title}
                        height={150}
                        width={150}
                    />
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                </div>
                <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <div className="h-24">
                    <CourseCardDescription
                        suggestedGrades={course.suggested_grades}
                        totalHours={course.total_hours}
                        price={course.price}
                    />
                </div>

                <Accordion type="multiple">
                    {compareCardFields.map((field, id) => {
                        return (
                            <AccordionItem value={field.title}>
                                <AccordionTrigger>{field.title}</AccordionTrigger>
                                <AccordionContent>{field.content}</AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </CardContent>

            <CardFooter className="w-full">
                <Button className="w-full" variant={'outline'} asChild>
                    <Link href={`/curriculum-crosswalk/${encodeURIComponent(course.title)}`}>More Details</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

function DescriptionField({ title, content }: { title: string; content: string }) {
    return (
        <div className="flex flex-col gap-1" key={title}>
            <p className="font-semibold">{title}</p>
            <p className="flex-1 text-muted-foreground">{content}</p>
        </div>
    )
}
