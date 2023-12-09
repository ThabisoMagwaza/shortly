'use client';
import React from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/utils/constants';

function UrlShortener({ save }) {
  const [link, setLink] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const submit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    const url = '/shorten';

    const request = {
      url: link,
    };

    try {
      const respose = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
      });

      if (!respose.ok) {
        alert('There was an error shortening the url');

        setSubmitting(false);
        return;
      }

      const { result_url } = await respose.json();

      save({
        id: Math.random() + Date.now(),
        long: link,
        short: result_url,
      });

      setSubmitting(false);
      setTouched(false);
      setLink('');
    } catch (error) {
      alert('The was an error shortening the url');

      setSubmitting(false);
      console.log(error);
    }
  };

  let error = false;
  if (!link) {
    error = true;
  }

  const showError = error && touched;

  const buttonText = (submitting && 'Shortening...') || 'Shorten it';

  return (
    <Wrapper onSubmit={submit}>
      <ElementsWrapper>
        <InputWrapper>
          <Input
            style={{
              '--border': (showError && COLORS.Accent67) || 'transparent',
              '--placeholder': (showError && COLORS.Accent87) || undefined,
            }}
            placeholder="Shorten a link here..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onBlur={() => setTouched(true)}
          />
          {showError && <ErrorMessage>Please add a link</ErrorMessage>}
        </InputWrapper>
        <Button
          disabled={error || submitting}
          style={{
            '--background':
              (submitting && COLORS.Secondary75) || COLORS.Secondary49,
          }}
        >
          {buttonText}
        </Button>
      </ElementsWrapper>
    </Wrapper>
  );
}

const ElementsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;

const InputWrapper = styled.div`
  flex-basis: 300px;
  flex-grow: 20;
`;

const Wrapper = styled.form`
  background-color: ${COLORS.Primary26};
  background-image: url('/images/bg-shorten-mobile.svg');
  background-repeat: no-repeat;
  background-position: 100% 0%;

  padding: ${24 / 16}rem;

  border-radius: 10px;

  margin-top: -104px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${QUERIES.phoneAndUp} {
    height: ${130 / 16}rem;
    padding: 0 ${32 / 16}rem;
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 0 ${64 / 16}rem;
    height: ${168 / 16}rem;
  }
`;

const Input = styled.input`
  height: ${48 / 16}rem;
  border-radius: 5px;

  font-size: 1rem;

  color: ${COLORS.VeryDarkBlue};
  padding: 6px 16px;
  width: 100%;

  border: 3px solid var(--border);

  &::placeholder {
    color: var(--placeholder);
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${64 / 16}rem;
    font-size: ${20 / 16}rem;
    padding: 14px 32px;
    border-radius: 10px;
  }
`;

const Button = styled.button`
  border: none;
  height: ${48 / 16}rem;
  border-radius: 5px;

  background: var(--background);
  font-weight: 700;
  color: ${COLORS.White};

  flex-basis: 150px;
  flex-grow: 1;
  cursor: pointer;

  &:hover {
    background: ${COLORS.Secondary75};
  }

  @media ${QUERIES.tabletAndUp} {
    height: ${64 / 16}rem;

    font-size: ${20 / 16}rem;
  }
`;

const ErrorMessage = styled.p`
  color: ${COLORS.Accent67};
  font-size: ${12 / 16}rem;
  font-style: italic;
  margin-top: 5px;

  @media ${QUERIES.phoneAndUp} {
    position: absolute;
  }

  @media ${QUERIES.tabletAndUp} {
    font-size: 1rem;
  }
`;

export default UrlShortener;
