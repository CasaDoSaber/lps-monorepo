import SliderComponent from 'components/SliderComponent';
import { PageLimit } from 'containers/PageLimit/styles';
import Image from 'next/image';
import * as S from './styles';

const CarrousselSection = () => {
  function handleClick(link) {
    window.open(link);
  }

  const settings = {
    centerMode: true,
    centerPadding: '180px',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          centerPadding: '90px',
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: '85px',
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: '75px',
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: '65px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: false,
          centerPadding: '0px',
        },
      },
    ],
  };

  const media = [
    {
      name: 'Ouvir os Outros',
      href: 'https://www.youtube.com/watch?v=Zo-jk4kVtE8',
      src: '/como-melhorar-relacoes/static/img/curso-ouvir.webp',
    },
    {
      name: 'Narcisismo',
      href: 'https://www.youtube.com/watch?v=NSQeGipn5Zw',
      src: '/como-melhorar-relacoes/static/img/curso-narcisismo.webp',
    },
    {
      name: 'Mal Estar',
      href: 'https://www.youtube.com/watch?v=lnMkMG5uif8',
      src: '/como-melhorar-relacoes/static/img/curso-malestar.webp',
    },
  ];

  const coursesRender = media.map((course) => (
    <S.CourseCard key={course.name}>
      <Image
        onClick={() => handleClick(course.href)}
        src={course.src}
        layout="fill"
        objectFit="contain"
        alt='Foto de Christian Dunker dando aula'
      />
    </S.CourseCard>
  ));

  return (
    <PageLimit>
      <S.Wrapper id="SAIBA MAIS">
        <S.Title>Conheça mais sobre</S.Title>
        <S.Author>CHRISTIAN DUNKER</S.Author>
        <S.SliderWrapper>
          <SliderComponent settings={settings}>{coursesRender}</SliderComponent>
        </S.SliderWrapper>
      </S.Wrapper>
    </PageLimit>
  );
};

export default CarrousselSection;
