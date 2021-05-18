module.exports = {
  isProduction: false || process.env.isProduction,
  mongoDbUrl: 'mongodb+srv://skins_lab_backup:my_database@cluster0.ke6hk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || process.env.mongoDbUrl,
  salt: 'a5828e9d6052dc3b14a93e07a5932dd9' || process.env.salt
};