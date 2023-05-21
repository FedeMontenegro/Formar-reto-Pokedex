import { Store, Browser } from "../"
import styled from "styled-components"

const Wrapper = styled.section`
`

const Home = () => {
  return (
    <Wrapper>
        <Browser />
        <Store />
    </Wrapper>
  )
}

export default Home