import React, { useState, useEffect } from 'react';
import styled from "styled-components";

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
        <LabelTitle>
          Horas:
          <input type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value, 10))} />
        </LabelTitle>
        <label>
          Minutos:
          <input type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value, 10))} />
        </label>
        <label>
          Segundos:
          <input type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value, 10))} />
        </label>
        <button type="submit">Iniciar</button>
      </ContainerForm>
      {elapsedTime > 0 && <div>Tiempo restante: {formatTime(elapsedTime)}</div>}
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
    display:flex;
    flex-direction:column;
`
const LabelTitle=styled.label`
    margin-right:10px;
`

export default Time;
