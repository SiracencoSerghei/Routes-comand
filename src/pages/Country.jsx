import {
  Section,
  Container,
  CountryInfo,
  Loader,
  Heading,
  CountryWrapper,
} from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

export const Country = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { countryId } = useParams();
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const backBtnStyle = {
    backgroundColor: 'white',
    color: '#22a6b3',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '4px',
    margin: '4px auto',
    textAline: 'center',
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(false);
        const fetchCountry = await fetchCountry(countryId);
        setCountry(fetchCountry);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(true);
      }
    };
    fetchData();
  }, [countryId]);
  const {
    flag,
    capital,
    countryName,
    id,
    languages = [],
    population,
  } = country;
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && (
          <>
            <Link to={backLink}>
              <CountryWrapper
                style={{
                  textAlign: 'center',
                  margin: '0 auto',
                  width: '100px',
                }}
              >
                <ArrowBackTwoToneIcon />
              </CountryWrapper>
            </Link>
            <Heading>Oops, something wrong</Heading>
          </>
        )}

        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
          backLink={backLink}
        />
        <Link to={backLink}>
        <button style={backBtnStyle}>Go BACK</button>
      </Link>
      </Container>
    </Section>
  );
};
