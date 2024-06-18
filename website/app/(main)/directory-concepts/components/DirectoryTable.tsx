import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const columns = [
    'Curriculum',
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
    title: string,
    concept: any
}

export default function DirectoryTable({data}: {data: DirectoryProps[]}) {
    const concepts = data.map(({concept}) => concept)

    // TODO Map over props object keys to get table rows and then

    // TODO update Table CSS to use borders from tailwind ui
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((title) => (
                        <TableHead>{title}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
