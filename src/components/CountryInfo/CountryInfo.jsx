import { Link } from 'react-router-dom';
import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

export const CountryInfo = ({
  flag,
  capital,
  country,
  id,
  languages = [],
  population,
  backLink,
}) => {
  return (
    <CountryWrapper>
      <Link to={backLink}>
        <CountryWrapper
          style={{
            textAlign: 'center',
            margin: '0 auto',
            width: '100px',
            color: 'white',
            backgroundColor: 'blue',
          }}
        >
          <ArrowBackTwoToneIcon />
        </CountryWrapper>
      </Link>
      <Flag>
        <Image src={flag} alt={country} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryTitle>{country}</CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};
