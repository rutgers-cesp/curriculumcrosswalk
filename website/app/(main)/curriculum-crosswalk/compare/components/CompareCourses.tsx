'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { CourseReview } from '@/types'
import CompareCard from './CompareCard'

export default function CompareCourses({ courseData }: { courseData: CourseReview[] }) {
    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
                {courseData.map((course) => {
                    return <CompareCard course={course} />
                })}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
