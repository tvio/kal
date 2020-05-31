module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  devServer: {
    proxy: "https://arcane-dawn-99940.herokuapp.com/kal",
  },
};
