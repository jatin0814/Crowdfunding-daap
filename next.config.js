module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/campaigns/new": { page: "/campaigns/new" },
      "/campaigns/show": { page: "/campaigns/show" },
      "/campaigns/requests/": { page: "/campaigns/requests/" },
      "/campaigns/requests/new": { page: "/campaigns/requests/new" },
    };
  },
};
