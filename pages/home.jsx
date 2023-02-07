import { Animals} from '../cmps/animals-list.jsx'
import { Seasons } from '../cmps/season-clock.jsx'

export function Home() {

    const animalInfos = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },
    ]

    return (
        <section>
           <h1>Animal</h1>
            <Animals animalInfos={animalInfos} />
            <Seasons />
        </section>
    )
}
