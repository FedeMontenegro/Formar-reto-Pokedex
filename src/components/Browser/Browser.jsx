import { useState } from 'react'
import styled from "styled-components"
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import useApi from "../../hooks/useApi"

const Wrapper = styled.section`
    border-radius: 25px;
    display: flex;
    margin: 15px auto;
    max-width: 500px;
    position: relative;
    width: 75%;
    `
const Search = styled.input`
    border-radius: 25px;
    font-size: 18px;
    padding: 10px 43px;
    width: 100%;
`

const Browser = () => {

    const [param, setParam] = useState("")
    const { filterPokemon } = useApi()

    return (
        <Wrapper>
            <IconButton 
                sx={{ position: "absolute", top: 2, left: 5}}
                onClick={() => filterPokemon(param)}
            >
                <SearchIcon />
            </IconButton>
            <Search
                onChange={e => setParam(e.target.value)}
                onKeyDown={e =>  e.key === "Enter" && filterPokemon(param)}
                placeholder="Filter Pokémon by name or abilities"
            />
        </Wrapper>
    )
}

export default Browser