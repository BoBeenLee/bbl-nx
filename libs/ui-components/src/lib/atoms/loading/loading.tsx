import styled from 'styled-components';
import { VscLoading } from 'react-icons/vsc';

/* eslint-disable-next-line */
export interface LoadingProps {
  className?: string;
  size: number;
}

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Loading(props: LoadingProps) {
  const { size } = props;
  return (
    <StyledLoading {...props}>
      <VscLoading size={size} />
    </StyledLoading>
  );
}

export default Loading;
