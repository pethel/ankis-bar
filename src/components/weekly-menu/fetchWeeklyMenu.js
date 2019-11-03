import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://ankisbar.cdn.prismic.io/api/v2';

export default () => Prismic.getApi(apiEndpoint, {})
  .then((api) => api.query(''))
  .then(response => {
    const [{data: {vecka: week, dags_meny: weeklyMenu}}] = response.results;
    return {week, weeklyMenu};
  }, err => console.log('Something went wrong: ', err));
