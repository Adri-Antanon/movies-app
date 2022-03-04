/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    moviedb_key: '2347257a3552ef655f75aceb97de0645',
    moviedb_url: 'https://api.themoviedb.org/3/movie/550?api_key=',
  },
};

module.exports = nextConfig;
