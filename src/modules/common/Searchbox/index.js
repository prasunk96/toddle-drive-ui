import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchO from '../../../assets/icons/SearchO.svg';
import CancelOutlined from '../../../assets/icons/CancelOutlined.svg';
import { IconButton } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid #DBDBDB',
    borderRadius: '6px',
    backgroundColor: '#fff',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '320px',
    height: '40px',
    fontSize: '16px',
    marginTop: theme.spacing(4)
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const ClearIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    top: '0',
    position: 'absolute',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    right: '0',
    zIndex: 1000000,
    cursor: 'pointer'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '25ch',
        }
    },
}));

const Searchbox = () => {
    const [query, setQuery] = useState('');
    const handleClearSearch = () => {
        setQuery('');
    }
    return (
        <Search>
            {query && <ClearIconWrapper>
                <IconButton onClick={handleClearSearch} arial-label="clear search"><img src={CancelOutlined} alt="clear search icon"/></IconButton>
            </ClearIconWrapper>}
            <SearchIconWrapper>
                <img src={SearchO} alt="searchbar icon" />
            </SearchIconWrapper>
            <StyledInputBase
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a folder or file"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}

export default Searchbox;
