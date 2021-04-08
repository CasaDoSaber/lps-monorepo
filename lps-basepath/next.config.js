module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: `/:path*`,
          },
          {
            source: '/como-melhorar-relacoes',
            destination: `https://lps-monorepo-como-melhorar-relacoes.vercel-support.app/como-melhorar-relacoes`,
          },
          {
            source: '/como-melhorar-relacoes/:match*',
            destination: `https://lps-monorepo-como-melhorar-relacoes.vercel-support.app//como-melhorar-relacoes/:match*`,
          }

        ]
      },    
      env: {

        NEXT_PUBLIC_GA_TRACKING: 'UA-178602651-2',
        GTM_ID: "GTM-PXKGLX6",
    },
  };
