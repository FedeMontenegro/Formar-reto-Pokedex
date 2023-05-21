import { useState } from "react"
import useCard from "../../hooks/useCard"

import styled from "styled-components"

import { getElements, getSecondaryElements } from "../../utils/constants.style.util"
import { getElement, vector_elements } from "../../utils/constans.elements.util"

const Wrapper = styled.div`
  background-color: ${props => props.background};
  border-radius: 15px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 322px;

  @media(min-width:500px) {
    flex-direction: column-reverse;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 16px;
  flex: 2;

`
const Img = styled.img`
  background-color: ${props => props.background};
  border-radius: 15px;
  cursor: pointer;
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.5));
  flex: 1;
  width: 126px;
  
  @media(min-width:500px) {
    margin: 15px auto 0;
  }
`
const NameContainer = styled.div`

  @media(min-width:500px) {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`
const Weight = styled.small`
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.5));
  font-size: 12px;
  font-weight: bold;
`
const Name = styled.h1`
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.5));
  font-size: 21px;
  margin: 0;
  padding: 2px 0;
`
const Abilities = styled.ul`
  display: flex;
  font-size: 18px;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
`
const Ability = styled.li`
`
const Small = styled.small`
  font-size: 14px;
`
const ImgWrapper = styled.div`

`
const Element = styled.img`
  fill: red;
`
const AbilitiesTitle = styled(Weight)`
  margin-top: 5px;

  @media(min-width:500px) {
    text-align: center;
  }
`


const Card = ({ detail }) => {

  const { front } = useCard(detail)

  const [$background, setBackground] = useState(getSecondaryElements(detail.data.types[0].type.name))

  return (
    <Wrapper background={$background}>

      <Info>
        <NameContainer>

          <Weight>
            Weight: {detail.data.weight}
          </Weight>

          <Name>
            {detail.data.name}
          </Name>
        </NameContainer>

        <AbilitiesTitle>Abilities:</AbilitiesTitle>
        <Abilities>
          {
            detail.data.abilities.map((element, id) => (
              <Ability>
                <Small>
                  {element.ability.name}
                </Small>
              </Ability>
            ))
          }
        </Abilities>

      </Info>

      <Img src={front} alt="avatar" /* background={getElements(detail.data.types[0].type.name)} */ />
    </Wrapper>
  )
}
export default Card