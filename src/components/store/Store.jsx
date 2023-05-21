import { useEffect } from "react"
import { Card } from "../"
import { useSelector, useDispatch } from "react-redux"
import useApi from "../../hooks/useApi"
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const Loading = styled.div`
  margin: 20px auto;
`

const Store = () => {

  const pokemon = useSelector(state => state.pokemon)
  const { pokemonDetail, allPokemon } = useApi()
  const dispatch = useDispatch()

  useEffect(() => {
    allPokemon()
  }, [])

  console.log("LIST: ", pokemon)

  return (
    <Wrapper>
      {
        pokemon.all.length > 0
        ?
        pokemon?.all?.map((element, id) => {
          return <Card detail={element} key={id} />
        })
        :
        <Loading>Loading...</Loading>
      }
    </Wrapper>
  )
}

export default Store