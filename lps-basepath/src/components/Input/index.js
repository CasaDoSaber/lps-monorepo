import React, { useCallback } from 'react';
import { tel, cpf } from './masks';
import * as S from './styles';

const Input = ({ variant = 'normal', mask, ...props }) => {
  const handleKeyUp = useCallback(
    (e) => {
      if (mask === 'tel') {
        tel(e);
      }
      if (mask === 'cpf') {
        cpf(e);
      }
    },
    [mask]
  );

  return <S.TextField variant={variant} {...props} onKeyUp={handleKeyUp} />;
};

export default Input;
