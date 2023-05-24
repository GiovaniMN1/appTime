import { useState, useEffect } from 'react';
import styled from "styled-components";
import {InputTime, LabelTime,ButtonTime} from './../elements/Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'

const Time =()=> {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setElapsedTime(totalSeconds);
  }

  useEffect(() => {
    let interval;
    if (elapsedTime > 0) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => {
          if (prevElapsedTime > 0) {
            return prevElapsedTime - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [elapsedTime]);

  function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <ContainerTime>
      <ContainerForm onSubmit={handleSubmit}>
        <LabelTime>
          Horas:
          <InputTime type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value, 10))} />
        </LabelTime>
        <LabelTime>
          Minutos:
          <InputTime type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value, 10))} />
        </LabelTime>
        <LabelTime>
          Segundos:
          <InputTime type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value, 10))} />
        </LabelTime>
        <ContainerButtons>
          <ButtonTime1 type="submit"><FontAwesomeIcon icon={faPlay}  /></ButtonTime1>
          <ButtonTime2 widthB type="submit"><FontAwesomeIcon icon={faPause}  /></ButtonTime2>
          <ButtonTime3 widthB type="submit"><FontAwesomeIcon icon={faArrowRotateRight}  /></ButtonTime3>
        </ContainerButtons>    
        
      </ContainerForm>
      {elapsedTime > 0 && <ContainerClock>Tiempo restante: {formatTime(elapsedTime)}</ContainerClock>}
    </ContainerTime>
  );
}
const ContainerTime=styled.div`
    display: flex;
    height:80vh;
    align-items:center;
    justify-content:center;
    
`
const ContainerForm=styled.form`
    flex:1 1 50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`
const ContainerClock=styled.div`
    flex:1 1 50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
 
`
const ContainerButtons=styled.div`
  display:flex;
  flex-direction:row;
  width:300px;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`
const ButtonTime1=styled.button`
  flex:100%;
  margin-top:10px;
  margin-bottom:10px;
`
const ButtonTime2=styled.button`
  flex:1 1 40%;
`
const ButtonTime3=styled.button`
  flex:1 1 40%;
  margin-left:5px;
`


export default Time;
