import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const result = await getCountries();
        setCountries(result);
        console.log('result', result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading>Oops, something wrong</Heading>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
