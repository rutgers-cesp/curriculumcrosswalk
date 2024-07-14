import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { CourseReview } from '@/types'
import { BookOpenText, Clock, DollarSign, School } from 'lucide-react'
import Image from 'next/image'
import { ToggleState } from './ToggleGrid'

export function CourseCardDescription({
    suggestedGrades,
    totalHours,
    price,
}: {
    suggestedGrades: string
    totalHours: number
    price: string
}) {
    return (
        <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="secondary" className="py-1">
                <School className="mr-3 h-4 w-4" />
                Suggested for {suggestedGrades} Grade
            </Badge>
            <Badge variant="secondary" className="py-1">
                <Clock className="mr-3 h-4 w-4" />
                {totalHours} hours
            </Badge>
            <Badge variant="secondary" className="py-1">
                <DollarSign className="mr-3 h-4 w-4" />
                {price}
            </Badge>
        </div>
    )
}

function CourseCardImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="absolute right-5 top-5 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
            <figure
                className={cn(
                    'relative w-64 cursor-pointer overflow-hidden rounded-xl p-4',
                    'transform-gpu transition-all duration-300 ease-out',
                )}
            >
                <Image className="mx-auto" src={src} alt={alt} height={150} width={150} />
            </figure>
        </div>
    )
}

export default function CrosswalkGrid({
    toggleState,
    handleToggleState,
    compareMode,
    courses,
}: {
    toggleState: ToggleState
    handleToggleState: (updated: ToggleState) => void
    compareMode: boolean
    courses: CourseReview[]
}) {
    const courseCards = courses.map((course) => {
        return {
            name: course.title,
            description: (
                <CourseCardDescription
                    suggestedGrades={course.suggested_grades}
                    totalHours={course.total_hours}
                    price={course.price}
                />
            ),
            Icon: BookOpenText,
            href: `/curriculum-crosswalk/${encodeURIComponent(course.title)}`,
            cta: 'Learn more',
            className: 'col-span-3 lg:col-span-1',
            background: <CourseCardImage src={course.image_url} alt={course.title} />,
        }
    })

    const numCourses = Object.keys(toggleState).reduce((acc, curr) => {
        const selected = toggleState[curr]
        return acc + (selected ? 1 : 0)
    }, 0)

    if (numCourses > 3) {
        return (
            <BentoGrid>
                {courseCards.map((card, id) => {
                    return (
                        <BentoCard
                            key={id}
                            disabled
                            compareMode={compareMode}
                            checked={toggleState[card.name]}
                            handleToggle={() =>
                                handleToggleState({ ...toggleState, [card.name]: !toggleState[card.name] })
                            }
                            {...card}
                        />
                    )
                })}
            </BentoGrid>
        )
    }
    return (
        <BentoGrid>
            {courseCards.map((card, id) => {
                return (
                    <BentoCard
                        key={id}
                        disabled={false}
                        compareMode={compareMode}
                        checked={toggleState[card.name]}
                        handleToggle={() => handleToggleState({ ...toggleState, [card.name]: !toggleState[card.name] })}
                        {...card}
                    />
                )
            })}
        </BentoGrid>
    )
}
