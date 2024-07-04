import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { heroes } from '../../data/heroes';


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
    });
    
    const { searchText } = formValues;
    
    const heroesFiltered = heroes;

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`);
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type='submit'
                            className='m-1 btn btn-block btn-outline-primary'
                        >
                            Search...
                        </button>
                    </form>

                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
      
        </div>
    )
}


