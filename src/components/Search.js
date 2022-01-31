import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import querystring from 'query-string';
import { useForm } from '../hooks/useForm';
import { getMoviesByName } from '../selectors/getMoviesByName';
import { getData } from '../helpers/getData';
import List from './List';




const Search = () => {
    const [movies, setMovies] = useState([]);

    const SearchContainer = styled.div`
        width: 100%;
        height: 100vh;
        margin-top: 50px;
        
    `
    const Title = styled.div`
        font-family: 'Permanent Marker', cursive;
        font-size: 2rem;
    `
    
    const location = useLocation();

    const navigate = useNavigate();

    
    const {q = ''} = querystring.parse(location.search);


    const [values, handleInputChange] = useForm({
        
        searchText: q
    })

    const { searchText } = values;

    
    const moviesFiltered = getMoviesByName(searchText, movies);


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    useEffect(() => {
        getData(setMovies)
    }, []);
    

  return <SearchContainer>
        <div className='d-flex w-100'>
            <Form onSubmit={handleSearch} className='mb-5 w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search yout movie" autoComplete='off' className='w-50 mx-4'
                    value={searchText}
                    onChange={handleInputChange}
                    name="searchText"/>
                </Form.Group>
            </Form>
            <Title className='w-50 text-light'>Hooks MovieApp xD</Title>
        </div>
        <List datos={moviesFiltered}/>
  </SearchContainer>;
};

export default Search;
