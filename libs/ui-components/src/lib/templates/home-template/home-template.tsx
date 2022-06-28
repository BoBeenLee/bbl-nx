import HomeCard from '../../molecules/home-card/home-card';
import LayoutTemplate, {
  LayoutTemplateProps,
} from '../layout-template/layout-template';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeTemplateProps
  extends Omit<LayoutTemplateProps, 'children'> {}

export function HomeTemplate(props: HomeTemplateProps) {
  const { asPath, onNavigate } = props;

  return (
    <LayoutTemplate asPath={asPath} onNavigate={onNavigate}>
      <div className="flex flex-col items-start justify-center max-w-2xl py-16 mx-auto border-gray-200 sm:mb-16 dark:border-gray-700">
        <HomeCard
          name={'BoBeen Lee'}
          roleName={'Frontend Developer'}
          description={'I love coding'}
        />
      </div>
    </LayoutTemplate>
  );
}

export default HomeTemplate;
