import Button from 'components/Button';
import Input from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as S from './styles';

const OverlayForm = ({ action, isOverlay }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    tel: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleOnChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const request = await action(form);
    setForm({
      name: '',
      email: '',
      tel: '',
    });
    setLoading(false);

    if (request.status === 200) {
      router.push(
        '/como-se-relacionar-melhor-christian-dunker/confirme-inscricao'
      );
    } else {
      setError(request.data.message);
    }
  };

  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: ' nome',
      value: form.name,
      title: 'O nome deve ter apenas letras',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: ' email',
      title: 'Apenas emails válidos',
      value: form.email,
    },
    {
      name: 'tel',
      type: 'text',
      placeholder: ' telefone',
      title: 'Seu telefone deve ter só números',
      value: form.tel,
      mask: 'tel',
    },
  ];

  const textFieldRender = inputs.map((input) => (
    <Input
      key={input.placeholder}
      mask={input.mask}
      variant="overlay"
      placeholder={input.placeholder}
      type={input.type}
      onChange={handleOnChange}
      name={input.name}
      title={input.title}
      value={input.value}
      required={true}
    />
  ));

  return (
    <>
      <S.Form isOverlay={isOverlay} onSubmit={handleSubmit}>
        <S.Title>INSCREVA-SE</S.Title>
        <S.Subtitle>GRATUITAMENTE!</S.Subtitle>
        <S.Response error={error}>{error && error}</S.Response>{' '}
        <S.TextFieldWrapper>{textFieldRender}</S.TextFieldWrapper>
        <Button variant="overlayForm" children="QUERO PARTICIPAR" />
        <LoadingOverlay isLoading={isLoading} />
      </S.Form>
    </>
  );
};

export default OverlayForm;
