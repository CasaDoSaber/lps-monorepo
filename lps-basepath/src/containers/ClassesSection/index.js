import ClassBearer from 'components/ClassBearer';
import IconBearer from 'components/IconBearer';
import { PageLimit } from 'containers/PageLimit/styles';
import * as S from './styles';

const ClassesSection = () => (
  <PageLimit id='AS AULAS'>
    <IconBearer />
    <ClassBearer />
  </PageLimit>
);

export default ClassesSection;
