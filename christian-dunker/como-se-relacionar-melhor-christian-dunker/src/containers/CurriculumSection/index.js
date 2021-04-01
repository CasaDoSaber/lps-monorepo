import { PageLimit } from 'containers/PageLimit/styles';
import Image from 'next/image';
import * as S from './styles';

const CurriculumSection = () => (
  <PageLimit>
    <S.Wrapper id="COM QUEM VOU APRENDER">
      <S.HeroBlock>
        <S.Hero>
          <Image
            src="/como-melhorar-relacoes/static/img/curriculumDunker.webp"
            layout="fill"
            objectFit="contain"
          />
        </S.Hero>
        <S.AuthorMobile>CHRISTIAN DUNKER</S.AuthorMobile>
      </S.HeroBlock>
      <S.Info>
        <S.AuthorDesktop>CHRISTIAN DUNKER</S.AuthorDesktop>
        <S.Curriculum>
          É psicanalista e professor titular do departamento de Psicologia
          Clínica do Instituto de Psicologia da USP. É analista membro da Escola
          de Psicanálise dos Fóruns do Campo Lacaniano e coordenador do
          Laboratório de Teoria Social, Filosofia e Psicanálise da USP. Fez seu
          pós-doutorado na Manchester Metropolitan University, sendo professor
          convidado em mais de quinze universidades internacionais. Duas vezes
          agraciado com o prêmio Jabuti, por "Estrutura e constituição da
          clínica psicanalítica" (Anablume, 2012) e "Mal estar, sofrimento e
          sintoma" (Boitempo, 2016).
        </S.Curriculum>
      </S.Info>
    </S.Wrapper>
  </PageLimit>
);

export default CurriculumSection;
