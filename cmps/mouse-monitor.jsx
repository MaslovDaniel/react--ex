const { useState, useEffect, useRef } = React

export function MouseMonitor() {


    const [isOn, setIsOn] = useState(true)
    const [mousePos, setMousePos] = useState(
        {
            x: 0,
            y: 0
        }
    )

    useEffect(() => {

        if (isOn) addMouseListener()
        else removeMouseListener()

        return () => {
            if (isOn) removeMouseListener()
        }
        
    }, [isOn]);

    function toggleIsOn() {
        setIsOn((prevIsOn) => (!prevIsOn))
    }

    function addMouseListener() {
        document.addEventListener('mousemove', updatePos)
    }

    function removeMouseListener() {
        document.removeEventListener('mousemove', updatePos)
    }

    function updatePos({ clientX, clientY }) {
        setMousePos({
            x: clientX,
            y: clientY
        })
    }


    return (
        <div>
            The mouse is at position{' '}
            <b>
                ({mousePos.x}, {mousePos.y})
            </b>
            <button onClick={toggleIsOn}>{isOn ? 'Pause' : 'Resume'}</button>
        </div>
    )
}