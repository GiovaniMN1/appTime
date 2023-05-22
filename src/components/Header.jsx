import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './../elements/HeaderStyles.css'

const Header=()=>{
    return(
        <ContainerHeader>
          <TitleHeader>Title Lorem isep</TitleHeader>
          
          <ContainerNav>
            <NavLink to='/'><FontAwesomeIcon icon={faClock } className="navA"/></NavLink>
            <NavLink to='/time'><FontAwesomeIcon icon={faPenToSquare} className="navA" /></NavLink>
            
          </ContainerNav>
        </ContainerHeader>
    )
}
const ContainerHeader=styled.header`
  display:flex;
  width:100%;
  height:20vh;
  background-color:#1B1A17;
  flex-direction:column;
  
`
const ContainerNav=styled.nav`
  width:30%;
  display:flex;
  justify-content:space-evenly;
`
const TitleHeader=styled.h1`
  font-size:1.4rem;
  font-weight:300;
  padding-left:30px;
  text-align:center;
`


export default Header