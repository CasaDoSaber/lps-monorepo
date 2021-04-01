import ConfirmationSection from 'containers/ConfirmationSection';

export default function Confirmacao(props) {
  return (
    <>
      <ConfirmationSection />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
