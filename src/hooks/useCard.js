import { useState, useEffect } from 'react'
import useScreenSize from "./useScreenSize"

const useCard = (detail) => {

    const { widthResize } = useScreenSize()
    const [front, setFront] = useState()

    const toggle_front = () => {

        setFront(
            widthResize > 500
                ?
                detail
                    ?.data
                    ?.sprites
                    ?.other
                    ?.dream_world
                    ?.front_default
                :
                detail
                    ?.data
                    ?.sprites
                    ?.front_default
        )
    }

    useEffect(() => {
        toggle_front()
    }, [widthResize, detail])

    return {
        front,
    }

}

export default useCard