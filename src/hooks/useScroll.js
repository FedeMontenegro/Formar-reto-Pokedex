import { useEffect, useState } from 'react'
import useApi from './useApi'
import { useSelector } from 'react-redux'

const useScroll = () => {

    const [bottomY, setBottomY] = useState(false)
    const { allPokemon } = useApi()
    const pokemon = useSelector(state => state.pokemon)

    const handleScrollBottom = () => {
        
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // Se ha llegado al scroll bottom
            setBottomY(true)
            allPokemon(pokemon.next)
            console.log('Se ha llegado al scroll bottom');
        }
    }

    /* useEffect(() => {
        window.addEventListener("scroll", handleScrollBottom);
    
      return () => {
        window.removeEventListener("scroll", handleScrollBottom);
      }
    }, [])
     */

    return {
        handleScrollBottom,
        bottomY,
    }
}

export default useScroll