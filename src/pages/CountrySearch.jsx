import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from '../service/country-service';
import { useSearchParams } from 'react-router-dom';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');
    if (!region) {
      return;
    }
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const result = await fetchByRegion(region);
        setCountries(result);
        // console.log('result', result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, [searchParams, query]);
  // console.log(searchParams.get('query'));
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading>Oops, something wrong</Heading>}
        <SearchForm setSearch={setQuery} setSearchParams={setSearchParams} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
