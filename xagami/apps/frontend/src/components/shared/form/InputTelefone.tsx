/* eslint-disable @typescript-eslint/no-explicit-any */


'use client';

import { useEffect, useState } from 'react';
import PhoneInput, { getCountries } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


// Extrai todos os códigos válidos da própria lib
type CountryCode = (typeof getCountries) extends () => Array<infer R> ? R : never;

function isValidCountryCode(code: string): code is CountryCode {
  return getCountries().includes(code as any);
}

export interface InputTelefoneProps {
  value?: string;
  onChange?: (value: string | undefined) => void;
  onChangeText?: (value: string) => void;
  placeholder?: string;
}
export default function InputTelefone(props:InputTelefoneProps) {
  const [country, setCountry] = useState<CountryCode>('AO');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const code = data?.country_code;
        if (isValidCountryCode(code)) {
          setCountry(code);
        }
      })
      .catch(() => setCountry('AO'));
  }, []);
  return (
    <div className="
  flex w-full px-4 py-2 border border-gray-300 rounded text-sm text-gray-800 
  focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 transition
">
  <PhoneInput
    international
    defaultCountry={country}
    value={props.value}
    onChange={(value) => {
      props.onChange?.(value);
      props.onChangeText?.(value ?? '');
    }}
    placeholder={props.placeholder}
    className="flex-1 bg-transparent outline-none border-none focus:outline-none"
  />
</div>

  );
}
