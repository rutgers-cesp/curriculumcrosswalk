export interface CourseReview {
    title: string
    description: string
    suggested_grades: string
    total_hours: any
    price: string
    platform: string
    programming_language: string
    device_compatibility: string
    auto_grading_availability: string
    course_lens: string
    CSTA_standards: string
    course_structure: string
    sequencing: string
    sequencing_details: string
    lesson_structure: string
    training_info: string
    funding_info: string
    date_modified: string
    spotlight: string
    expert_take: string
    image_url: string
}

export interface CourseDirectory {
    title: string
    fundamentals: Fundamentals
    design: Design
    applications: Applications
    concepts: Concepts
}

interface Fundamentals {
    syntax: string | null
    debugging: string | null
    conditionals: string | null
    loops: string | null
    nested: string | null
    functions: string | null
    variables: string | null
}

interface Design {
    webdesign: string | null
    producing: string | null
    animation: string | null
    interactivity: string | null
    gamedesign: string | null
}

interface Applications {
    storytelling: string | null
    data: string | null
    career: string | null
    impact: string | null
}

interface Concepts {
    ai: string | null
    hardware: string | null
    software: string | null
    cloud: string | null
    history: string | null
    ethics: string | null
    literacy: string | null
}
