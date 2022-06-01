import React from 'react'
import styled from 'styled-components'
import { RiDiscordLine } from "react-icons/ri"


const StyledDiscord = styled.div`
    position: fixed;
    padding-right: 30px;
    padding-bottom: 10px;
    font-size: 70px;
    bottom:0;
    right: 0;
    margin-left: auto;
    cursor: pointer;
`

export default function Discord() {
  return (
    <div>
        <StyledDiscord>
            <RiDiscordLine />
        </StyledDiscord>
    </div>
  )
}

