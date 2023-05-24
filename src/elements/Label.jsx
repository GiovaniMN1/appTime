import styled, {css} from "styled-components";

const LabelTime = styled.label`
    color: gray;
`
const InputTime = styled.input`
    background-color:#1B1A17;
    border:none;
    border-bottom:2px solid #B2B1B9;
    color:#ffffff;
    width:150px;
    text-align:center;
    margin-left:20px;
    margin-bottom:20px;

    &&
    ::placeholder{
        color:#FFD523;
    }
    
`
const ButtonTime=styled.button`
    background-color:#FFD369;
    color:#222831;
    width:250px;
    height:30px;
    font-size:20px;
    border:none;
    border-radius:5px;

    /*${(props) =>
    props.widthB &&
    css`
      width: 200px;
      margin:10px 0 0px 0;
    `}
    */
    :hover{
        background-color:#FFD523;
        color:#000000;
        

    }
    
    
`

export {LabelTime,InputTime, ButtonTime} ;