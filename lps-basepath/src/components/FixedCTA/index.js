import { subscribe } from 'actions/subscribe';
import Button from 'components/Button';
import Input from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';
import OverlayForm from 'components/OverlayForm';
import { PageLimit } from 'containers/PageLimit/styles';
import { useRouter } from 'next/router';
import { forwardRef, useState } from 'react';
import * as S from './styles';

const FixedCTA = forwardRef((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [error, setError] = useState('');
  const [isOverlay, setOverlay] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const onChange = (event) => {
    switch (event.target.name) {
      case 'name':
        return setName(event.target.value);
      case 'email':
        return setEmail(event.target.value);
      case 'tel':
        return setTel(event.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = await props.action({
      name,
      email,
      tel,
    });
    setName('');
    setEmail('');
    setTel('');
    setLoading(false);

    if (request.status === 200) {
      router.push(
        '/como-se-relacionar-melhor-christian-dunker/confirme-inscricao'
      );
    } else {
      setError(request.data.message);
    }
  };

  const handleOnClickOverlay = (status) => {
    setOverlay(status);
  };

  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Digite seu nome',
      value: name,
      title: 'O nome deve ter apenas letras',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Digite seu email',
      value: email,
      title: 'Apenas emails válidos',
    },
    {
      name: 'tel',
      type: 'tel',
      placeholder: 'Digite seu telefone',
      mask: 'tel',
      value: tel,
      title: 'Seu telefone deve ter só números',
    },
  ];

  const textFieldRender = inputs.map((input) => (
    <Input
      mask={input.mask}
      variant="normal"
      key={input.placeholder}
      placeholder={input.placeholder}
      type={input.type}
      onChange={onChange}
      name={input.name}
      value={input.value}
    />
  ));

  return (
    <PageLimit>
      <S.Wrapper onSubmit={handleSubmit} ref={ref} isSticky={props.isSticky}>
        <S.TextWrapper isSticky={props.isSticky}>
          <S.Title isSticky={props.isSticky}>
            INSCREVA-SE GRATUITAMENTE{' '}
          </S.Title>
          <S.Response isSticky={props.isSticky} error={error}>
            {error && error }
          </S.Response>
          <S.TextFieldWrapper isSticky={props.isSticky}>
            {textFieldRender}
          </S.TextFieldWrapper>
        </S.TextWrapper>
        <Button children="QUERO PARTICIPAR" variant="nonOverlay" />
        <Button
          children="QUERO PARTICIPAR"
          variant="overlay"
          type="button"
          onClick={() => handleOnClickOverlay(true)}
        />
      </S.Wrapper>
      <LoadingOverlay isLoading={isLoading} />
      <OverlayForm isOverlay={isOverlay} action={props.action} />
      <S.Overlay
        isOverlay={isOverlay}
        onClick={() => handleOnClickOverlay(false)}
      />
    </PageLimit>
  );
});

export default FixedCTA;
