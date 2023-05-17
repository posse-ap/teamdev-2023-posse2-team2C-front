/** @type {import('next').NextConfig} */
const nextConfig = {
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  auth: {
    redirect: {
      login: "http://localhost:3000/auth/register",
    },
    strategies: {
      laravelApi: {
        provider: "laravel/sanctum",
        url: "http://localhost:80",
        endpoints: {
          login: { url: "/api/login", method: "post" },
          logout: { url: "/api/logout", method: "post" },
          user: { url: "/api/user", method: "get" },
        },
      },
    },
  },
  router: {
    mode: "hash",
    base: process.env.BASE_URL,
    middleware: ["auth"],
  },
  axios: {
    baseURL: "http://localhost:80",
    credentials: true,
  },
};

module.exports = nextConfig;
