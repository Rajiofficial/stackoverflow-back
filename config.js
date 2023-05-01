module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb+srv://raji:<ranjithraj>@cluster0.aa9ahmk.mongodb.net/stackoverflow',
    test: 'mongodb+srv://raji:<ranjithraj>@cluster0.aa9ahmk.mongodb.net/stackoverflow',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
