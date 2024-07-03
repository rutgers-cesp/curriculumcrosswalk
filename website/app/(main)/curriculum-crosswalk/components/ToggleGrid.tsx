'use client'

import { CourseReview } from '@/types'
import { useState } from 'react'
import CrosswalkGrid from './CrosswalkGrid'
import ToggleButton from './ToggleButton'

export type ToggleState = Record<string, boolean>

export default function ToggleGrid({ courses }: { courses: CourseReview[] }) {
    const [compareMode, setCompareMode] = useState(false)
    const [toggleState, setToggleState] = useState<ToggleState>(() => {
        const res: ToggleState = {}
        for (const course of courses) {
            res[course.title] = false
        }
        return res
    })

    const numCourses = Object.keys(toggleState).reduce((acc, curr) => {
        const selected = toggleState[curr]
        return acc + (selected ? 1 : 0)
    }, 0)

    const continueSearchParams = Object.keys(toggleState).reduce<string[]>((acc, curr) => {
        if (toggleState[curr]) {
            return [...acc, curr]
        }
        return acc
    }, [])

    return (
        <div>
            <ToggleButton
                numCourses={numCourses}
                compareMode={compareMode}
                handleToggle={() => setCompareMode((prev) => !prev)}
                continueParams={continueSearchParams}
            />
            <CrosswalkGrid
                compareMode={compareMode}
                toggleState={toggleState}
                handleToggleState={(updated) => setToggleState(updated)}
                courses={courses}
            />
        </div>
    )
}
