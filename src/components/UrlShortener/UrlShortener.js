'use client';
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@/utils/constants';

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
      <div>
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
      </div>
      <Button
        disabled={error || submitting}
        style={{
          '--background':
            (submitting && COLORS.Secondary75) || COLORS.Secondary49,
        }}
      >
        {buttonText}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  background-color: ${COLORS.Primary26};
  background-image: url('/images/bg-shorten-mobile.svg');
  background-repeat: no-repeat;
  background-position: 100% 0%;

  padding: ${24 / 16}rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: -104px;
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
`;

const Button = styled.button`
  border: none;
  height: ${48 / 16}rem;
  border-radius: 5px;

  background: var(--background);
  font-weight: 700;
  color: ${COLORS.White};
`;

const ErrorMessage = styled.p`
  color: ${COLORS.Accent67};
  font-size: ${12 / 16}rem;
  font-style: italic;
  margin-top: 5px;
`;

export default UrlShortener;
