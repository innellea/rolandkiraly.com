import styled from '@emotion/styled';

export default styled.button`
  display: ${(props: any) => {
    return props.display || 'block';
  }};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;

  &:focus {
    outline: 2px auto var(--color-primary);
    outline-offset: 2px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;
