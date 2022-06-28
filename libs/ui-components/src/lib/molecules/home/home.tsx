import { Icon } from '../../atoms';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeProps {}

export function Home(__: HomeProps) {
  return (
    <div className="flex flex-row items-center space-x-32">
      <div className="w-16">
        <Icon name="facebook" />
      </div>
      <div className="w-16">
        <Icon name="instagram" />
      </div>
      <div className="w-16 pl-2">
        <Icon name="linkedin" />
      </div>
    </div>
  );
}

export default Home;
