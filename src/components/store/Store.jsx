import { useEffect } from "react"
import { Card } from "../"
import { useSelector, useDispatch } from "react-redux"
import useApi from "../../hooks/useApi"
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const Store = () => {

  const pokemon = useSelector(state => state.pokemon)
  const { pokemonDetail, allPokemon } = useApi()
  const dispatch = useDispatch()

  useEffect(() => {
    allPokemon("https://pokeapi.co/api/v2/pokemon/")
  }, [])

  console.log("POKEMON", pokemon)

  return (
    <Wrapper>
      {
        pokemon?.all?.map((element, id) => {
          return <Card detail={element} key={id} />
        })
      }
    </Wrapper>
  )
}

export default Store