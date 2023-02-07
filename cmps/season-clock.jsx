const { useState, useEffect, useRef } = React
import { utilService } from "../services/util.service.js"

export function Seasons() {

    const [time, setTime] = useState(new Date())
    const [isDark , setIsDark] = useState(false)


    const day = utilService.getDayName(time)
    const month = utilService.getMonthName(time)
    const season = utilService.getSeason(time)
    const clock = time.toLocaleTimeString()
    

    return (

        <section className= {`season-clock ${(isDark)? "dark-mode" : ""}`}>

           <h1>{season} , ({month})</h1>
           <img src={`./pics/${season}.png`} />
           <p>{day}</p>
           <p>{clock}</p>
           <button onClick = {()=> setIsDark(!isDark)}> Change dark</button>
           
        </section>

    )
}


