import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { cn } from '@/lib/utils'
import { CourseReview } from '@/types'
import { BookOpenText } from 'lucide-react'
import Image from 'next/image'
import { ToggleState } from './ToggleGrid'

function CourseCardDescription({
    suggestedGrades,
    totalHours,
    price,
}: {
    suggestedGrades: string
    totalHours: number
    price: string
}) {
    return (
        <div>
            <p className="max-w-lg text-neutral-600">
                <span className="text-neutral-400">Suggested Grades:</span> {suggestedGrades}.
            </p>
            <p className="max-w-lg text-neutral-600">
                <span className="text-neutral-400">Total Hours:</span> {totalHours}.
            </p>
            <p className="max-w-lg text-neutral-600">
                <span className="text-neutral-400">Price:</span> {price}
            </p>
        </div>
    )
}

function CourseCardImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="absolute right-5 top-5 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
            <figure
                className={cn(
                    'relative w-64 cursor-pointer overflow-hidden rounded-xl p-4',
                    'bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                    'dark:bg-gray-50/[.10]',
                    'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
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

    return (
        <BentoGrid>
            {courseCards.map((card, id) => {
                return (
                    <BentoCard
                        key={id}
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
