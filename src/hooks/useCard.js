import { useState, useEffect } from 'react'
import useScreenSize from "./useScreenSize"
import { useSelector, useDispatch } from 'react-redux'
import { setPokemon } from '../store/slices/pokemon.slice'

const useCard = (detail) => {

    const { widthResize } = useScreenSize()
    const [front, setFront] = useState()
    const [isChecked, setIsChecked] = useState(false)

    const pokemon = useSelector(state => state.pokemon)
    const dispatch = useDispatch()

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

    const handleChecked = (e, name) => {

        let listChecked = null

        if(e.target.checked) {
            setIsChecked(true)
    
            listChecked = pokemon.checked.concat(name)
    
            dispatch(setPokemon({
                ...pokemon,
                checked: listChecked,
            }))
        } else {
            setIsChecked(false)
            listChecked = pokemon.checked.filter(item => item !== name)
            
            dispatch(setPokemon({
                ...pokemon,
                checked: listChecked,
            }))

        }
    }

    const handleDelete = () => {

        let deletePokemon = JSON.parse(localStorage.getItem("deleted")) || []
        pokemon.checked.map(item => {
            deletePokemon.push(item)
        })
        
        setIsChecked(false)

        localStorage.setItem("deleted", JSON.stringify(deletePokemon))
        dispatch(setPokemon({
            ...pokemon,
            checked: [],
        }))
    }

    useEffect(() => {
        toggle_front()
    }, [widthResize, detail])

    return {
        front,
        handleChecked,
        handleDelete,
        isChecked,
    }

}

export default useCard