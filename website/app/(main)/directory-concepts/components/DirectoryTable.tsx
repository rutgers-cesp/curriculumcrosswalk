'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Toggle } from '@/components/ui/toggle'
import { Check, Undo2 } from 'lucide-react'
import { useState } from 'react'

const columns = [
    'CMU CS Academy',
    'CodeHS',
    'Code.org',
    'Harvard Creative Computing',
    'Google CS First',
    'Project STEM',
    'Tynker',
    'Microsoft MakeCode',
]

interface DirectoryProps {
    title: string
    concept: any
}

export default function DirectoryTable({ section, sectionTitle }: { section: DirectoryProps[]; sectionTitle: string }) {
    const [booleans, setBooleans] = useState(true)

    const sectionIdToSectionTitle: Record<string, string> = {
        syntax: 'Syntax',
        debugging: 'Debugging',
        conditionals: 'If Statements',
        loops: 'Loops',
        nested: 'Nested Structures',
        functions: 'Functions',
        variables: 'Variables',
        webdesign: 'Web Design',
        producing: 'Producing/Customizing Shapes',
        animation: 'Animation',
        interactivity: 'Interactivity',
        gamedesign: 'Game Design & Development',
        storytelling: 'Storytelling',
        data: 'Data Analysis/Science',
        career: 'Careers in Computing',
        impact: 'Impacts/Daily Life',
        ai: 'Artificial Intelligence',
        hardware: 'Hardware',
        software: 'Software/Applications',
        cloud: 'The Internet/Cloud/Networks',
        history: 'History of Computing',
        ethics: 'Ethics & Bias',
        literacy: 'Digital Citizenship/Literacy',
    }

    const concepts = section.map(({ concept }) => concept)
    const rows: Record<string, (string | null)[]> = {}
    for (const concept of concepts) {
        for (const section in concept) {
            const item = concept[section]
            const sectionTitle = sectionIdToSectionTitle[section]
            if (sectionTitle in rows) {
                rows[sectionTitle].push(item)
            } else {
                rows[sectionTitle] = [item]
            }
        }
    }

    if (booleans) {
        return (
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold underline">{sectionTitle} </h2>
                    <Toggle variant={'outline'} pressed={booleans} onPressedChange={() => setBooleans((prev) => !prev)}>
                        More Info
                    </Toggle>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Curriculum</TableHead>
                            {columns.map((title, id) => (
                                <TableHead className="min-w-32 text-center" key={id}>
                                    {title}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.keys(rows).map((sectionTitle, id) => {
                            const sectionData = rows[sectionTitle]
                            return (
                                <TableRow key={id}>
                                    <TableCell className="w-64 text-lg font-medium">{sectionTitle}</TableCell>
                                    {sectionData.map((data, idx) => (
                                        <TableCell key={idx} className="font-medium">
                                            <div className="mx-auto w-fit">{data === null || <CheckMark />}</div>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold underline">{sectionTitle}</h2>
                <Toggle variant={'outline'} pressed={booleans} onPressedChange={() => setBooleans((prev) => !prev)}>
                    <Undo2 className="mr-3 h-4 w-4" /> Back
                </Toggle>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Curriculum</TableHead>

                        {columns.map((title, id) => (
                            <TableHead className="min-w-32 text-center" key={id}>
                                {title}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.keys(rows).map((sectionTitle, id) => {
                        const sectionData = rows[sectionTitle]
                        return (
                            <TableRow key={id}>
                                <TableCell className="w-64 text-lg font-medium">{sectionTitle}</TableCell>
                                {sectionData.map((data, idx) => {
                                    if (idx === 4) {
                                        return (
                                            <TableCell
                                                key={idx}
                                                className="bg-gray-50 text-center font-medium text-muted-foreground"
                                            >
                                                N/A
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={idx} className="text-center font-medium">
                                            {data}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

function CheckMark() {
    return <Check className="h-4 w-4 text-green-600" />
}
