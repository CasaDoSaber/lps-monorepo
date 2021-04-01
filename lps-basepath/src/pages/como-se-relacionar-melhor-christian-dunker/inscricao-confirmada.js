import ConfirmationTwoSection from 'containers/ConfirmationTwoSection';

export default function Confirmacao(props) {
  return (
    <>
      <ConfirmationTwoSection />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
