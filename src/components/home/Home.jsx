import { useEffect } from "react"
import useApi from "../../hooks/useApi"
import { useSelector, useDispatch } from "react-redux"
import { setOpen } from "../../store/slices/alert.slice"

import styled from "styled-components"
import Logo from "../../assets/pokeapi.svg"

import { Store, SearchBar } from "../"
import InfiniteScroll from 'react-infinite-scroll-component'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import { Alert } from "../"

const Wrapper = styled.section`
  text-align:center;
  overflow: auto;
`
const Img = styled.img`
  cursor: pointer;
  margin: 20px auto;
  width: 250px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
  max-width: 500px;
  width: 90%;
`

const Home = () => {

  const { allPokemon } = useApi()
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(setOpen({
      open: true,
    }))
  }

  const reset = () => {
    localStorage.setItem("deleted", JSON.stringify([]))
    allPokemon("", true)
  }

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
      <SearchBar />

      <ButtonContainer>
        <Button
          variant="contained"
          color="error"
          onClick={handleOpen}
        >
          Delete
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={reset}
        >
          Reset
        </Button>

      </ButtonContainer>

      {
        pokemon.all.length > 0
          ?
          <InfiniteScroll
            dataLength={pokemon.all.length}
            next={() => { allPokemon(pokemon?.next) }}
            hasMore={pokemon?.next ? true : false}
            loader={<CircularProgress />}
            scrollThreshold={0.8}
            height={400}
            width="90%"
          >
            <Store />
          </InfiniteScroll>
          : <CircularProgress />
      }

      <Alert />
    </Wrapper>
  )
}

export default Home