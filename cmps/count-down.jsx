
const { useState, useEffect, useRef } = React

export function CountDown({ startFrom , onDone }) {

    const [count, setCount] = useState(startFrom)
    let intervalIdRef = useRef(null)

    useEffect(() => {
        console.log('Counter Mounted')
        intervalIdRef.current = setInterval(() => {
            const diff = -1
            setCount((prevCount) => prevCount + diff)
        }, 1000)


    }, [])


    useEffect(() => {
        checkIfDone(count)
    }, [count])


    function 
    checkIfDone(count){
        if(count ===0) {
            clearInterval(intervalIdRef.current) 
            onDone()
        }
            
    }

    return (
        <div className = {`${count <= 5 ? 'red-text' : ''}`}>
            <h2>{count}</h2>
        </div>

    )

}