import { useEffect, useState } from 'react';
import * as S from './styles';

function CountDownTimer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-04-26`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60).toString(),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <S.TimeBlock key={index}>
        <span >{timeLeft[interval]}</span>
        <span>{interval.toUpperCase()} </span>
      </S.TimeBlock>
    );
  });
  return (
    <S.Wrapper>
      <S.Title>Aula gratuita começa em</S.Title>
      {timerComponents.length ? timerComponents : <span>É hoje!!!</span>}
    </S.Wrapper>
  );
}

export default CountDownTimer;
