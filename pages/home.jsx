import { Animals} from '../cmps/animals-list.jsx'
import { CountDown } from '../cmps/count-down.jsx'
import { MouseMonitor } from '../cmps/mouse-monitor.jsx'
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
            <CountDown startFrom={10} onDone={()=> {
                console.log('Done')
            }}  />
            <MouseMonitor />
        </section>
    )
}
