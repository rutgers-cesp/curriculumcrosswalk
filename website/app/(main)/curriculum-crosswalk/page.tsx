import { readFile } from 'fs/promises'
import CrosswalkGrid from './components/CrosswalkGrid'

export default async function Page() {
    const res = await readFile('public/data/curriculum_crosswalk.json', 'utf8')
    const data = JSON.parse(res)

    return (
        <main className="flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6">
            <div className="">
                <h1 className="text-lg font-semibold md:text-2xl">Curriculum Crosswalk</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni amet itaque excepturi culpa
                    minima nobis officiis eligendi optio beatae rem repellendus velit tenetur, ea cum veritatis?
                    Quaerat, hic id.
                </p>
            </div>
            <div>
                <CrosswalkGrid courses={data}/>
            </div>
        </main>
    )
}
