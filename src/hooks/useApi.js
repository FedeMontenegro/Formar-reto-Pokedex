import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setPokemon } from "../store/slices/pokemon.slice"
import { get } from "../utils/api.utils"

const useApi = () => {

  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)

  const allPokemon = async (url) => {

    try {
      const response = await get(url)

      const details = response?.data?.results?.map((element, id) => {
        return pokemonDetail(element.url)
      })
      
      const pokemons = await Promise.all(details)
      
      dispatch(setPokemon({
        ...pokemon,
        state: "success",
        all: pokemons
      }))
      
    } catch (error) {
      console.log(error)
    }
  }

  const pokemonDetail = async (url) => {

    try {
      const response = await get(url)

      return response
    } catch (error) {
      console.log(error)
    }
  }

  return {
    allPokemon,
    pokemonDetail,
  }
}

export default useApi