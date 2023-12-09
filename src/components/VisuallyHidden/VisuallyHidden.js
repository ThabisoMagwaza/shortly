'use client';
import styled from 'styled-components';

function VisuallyHidden() {
  return <div></div>;
}

const Wrapper = styled.div`
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  position: absolute;
  overflow: hidden;
`;

export default VisuallyHidden;
