import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setPokemon } from "../store/slices/pokemon.slice"
import { get } from "../utils/api.utils"

const useApi = () => {

  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)

  const allPokemon = async (next = "") => {

    const url = next !== "" ? next : "https://pokeapi.co/api/v2/pokemon/"

    try {
      const response = await get(url)
      
      const details = response?.data?.results?.map((element, id) => {
        return pokemonDetail(element.url)
      })
      
      const pokemons = await Promise?.all(details)
      const newData = pokemon.all.concat(pokemons)

      dispatch(setPokemon({
        ...pokemon,
        all: newData,
        pagination: response,
        count: response.data.count,
        state: "success",
        next: response.data.next,
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

  const filterPokemon = async (param) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${param}`

    try {

      if (param !== "") {
        const response = await get(url)

        if (response.ok) {
          dispatch(setPokemon({
            ...pokemon,
            state: "success",
            all: [response]
          }))
        } else {
          filterByAbilities(param)
        }

      } else {

        allPokemon(param)
      }

    } catch (error) {
      console.log("Error al buscar el elemento : ", error)
    }
  }

  const filterByAbilities = async (param) => {

    try {

      const pokemonList = await get(`https://pokeapi.co/api/v2/ability/${param}`)

      const filterPokemon = pokemonList.data.pokemon.map(element => pokemonDetail(element.pokemon.url))
      
      const result = await Promise.all(filterPokemon)
      
      dispatch(setPokemon({
        ...pokemon,
        all: result
      }))

    } catch (error) {
      console.log("filterByAbilities error: ", error)
    }

  }

  return {
    allPokemon,
    pokemonDetail,
    filterPokemon,
  }
}

export default useApi