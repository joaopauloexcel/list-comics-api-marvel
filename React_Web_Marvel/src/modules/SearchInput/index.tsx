import React from 'react';
import './SearchInput.scss';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';


interface SearchInputProps {
  onChange: Function,
  search:string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange = () => {}, search }: SearchInputProps) => {

  return (
    <div className={`search-input`} data-testid="search-input-field">

      <input 
        data-testid={"input-search-test"}
        onChange={(event) => onChange(event.target.value)}
        type={"text"}
        value={search}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
