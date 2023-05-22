import { useEffect } from "react"
import useApi from "../../hooks/useApi"
import { useSelector } from "react-redux"

import styled from "styled-components"
import Logo from "../../assets/pokeapi.svg"

import { Store, Browser } from "../"
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularProgress from '@mui/material/CircularProgress';

const Wrapper = styled.section`
  text-align:center;
  overflow: auto;
`
const Img = styled.img`
  cursor: pointer;
  margin: 20px auto;
  width: 250px;
`

const Home = () => {

  const { allPokemon } = useApi()
  const pokemon = useSelector(state => state.pokemon)

  useEffect(() => {
    allPokemon()
  }, [])

  return (
    <Wrapper>

      <Img
        src={Logo}
        alt="pokeapi"
        onClick={() => window.location.href = "/"}
      />
      <Browser />

      {
        pokemon.all.length > 0
          ?
          <InfiniteScroll
            dataLength={pokemon.all.length}
            next={() => { allPokemon(pokemon?.next) }}
            hasMore={pokemon?.next ? true: false}
            loader={<CircularProgress />}
            scrollThreshold={1}
            height={400}
            width="100%"
          >
            <Store />
          </InfiniteScroll>
          : ""
      }
    </Wrapper>
  )
}

export default Home