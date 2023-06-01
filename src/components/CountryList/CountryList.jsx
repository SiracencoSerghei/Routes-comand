import { Grid, GridItem } from 'components';
import { NavLink, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(country => {
        return (
          <GridItem key={country.id}>
            <NavLink to={`/country/${country.id}`} state={{ from: location }}>
              {' '}
              <img src={country.flag} alt={country.country} />
            </NavLink>
          </GridItem>
        );
      })}
    </Grid>
  );
};
