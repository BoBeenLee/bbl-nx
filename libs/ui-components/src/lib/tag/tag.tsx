import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TagProps {
  className?: string;
  name: string;
}

const StyledTag = styled.div``;

export function Tag(props: TagProps) {
  const { className, name } = props;
  return <StyledTag className={className}>{name}</StyledTag>;
}

export default Tag;
