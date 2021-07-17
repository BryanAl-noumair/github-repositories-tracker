import React, { FC, ReactElement, useEffect, useState } from 'react';

import { useDebounce } from 'common/hooks/useDebounce';
import { Wrapper, Input, Label } from './styles';

type searchBarProps = {
  initialValue: string;
  onChangeCb: (term: string) => void;
  inputId: string;
  label: string;
  placeholder: string;
};

const SearchBar: FC<searchBarProps> = ({
  initialValue,
  onChangeCb,
  inputId,
  label,
  placeholder
}): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue);
  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchTerm(event.currentTarget.value);

  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
  useEffect(() => {
    onChangeCb(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <Wrapper>
      <Label htmlFor={inputId}>{label}</Label>
      <Input id={inputId} value={searchTerm} onChange={handleOnChange} placeholder={placeholder} />
    </Wrapper>
  );
};

export default SearchBar;
