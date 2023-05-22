import { Card } from "../"
import { useSelector } from "react-redux"
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const Store = () => {

  const pokemon = useSelector(state => state.pokemon)

  return (
    <Wrapper>
      {
        pokemon.all.length > 0
        ?
        pokemon?.all?.map((element, id) => {
          return <Card detail={element} key={id} />
        })
        :""
      }
    </Wrapper>
  )
}

export default Store