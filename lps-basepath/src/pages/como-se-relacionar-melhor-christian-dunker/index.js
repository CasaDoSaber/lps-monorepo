import CatchPhraseSection from 'containers/CatchPhraseSection';
import ClassesSection from 'containers/ClassesSection';
import CurriculumSection from 'containers/CurriculumSection';
import CarrousselSection from 'containers/CarrousselSection';
import HeroSection from 'containers/HeroSection';
import Footer from 'components/Footer';
import FixedCTA from 'components/FixedCTA';
import { useEffect, useRef, useState } from 'react';
import { subscribe } from 'actions/subscribe';

export default function Home(props) {
  const [isSticky, setIsticky] = useState(false);

  useEffect(() => {
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (
        catchPhraseRef.current &&
        window.pageYOffset + window.innerHeight >
          catchPhraseRef.current.offsetTop + catchPhraseRef.current.offsetHeight
      ) {
        setIsticky(true);
      } else {
        setIsticky(false);
      }
    });
  }, []);

  const footerRef = useRef();
  const catchPhraseRef = useRef();
  const CTARef = useRef();

  return (
    <>
      <HeroSection />
      <CatchPhraseSection phrase={props.catchPhrases.phrase1} />
      <ClassesSection />
      <CatchPhraseSection phrase={props.catchPhrases.phrase2} />
      <CurriculumSection />
      <CarrousselSection />
      <CatchPhraseSection
        phrase={props.catchPhrases.phrase3}
        ref={catchPhraseRef}
      />
      <FixedCTA ref={CTARef} isSticky={isSticky} action={subscribe} />
      <Footer ref={footerRef} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      catchPhrases: {
        phrase1:
          'Um curso para ampliar sua capacidade de escutar o outro e se relacionar',
        phrase2:
          '“A diversidade e a diferença se tornam produtivas na medida em que conseguimos escutá-las”',
        phrase3:
          '“Aprender a escutar o outro deveria ser matéria no currículo das escolas”',
      },
    },
  };
}
