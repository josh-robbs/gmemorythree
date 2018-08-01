module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/videogames'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}