module.exports = {
    async rewrites() {
        return [
          
          {
            source: '/como-melhorar-relacoes',
            destination: `https://lps-monorepo-como-melhorar-relacoes.vercel-support.app/`,
          },
          {
            source: '/como-melhorar-relacoes/:match*',
            destination: `https://lps-monorepo-como-melhorar-relacoes.vercel-support.app/:match*`,
          }

        ]
      },    
      env: {
        
        NEXT_PUBLIC_GA_TRACKING: 'UA-178602651-2',
        GTM_ID: "GTM-PXKGLX6",
    },
  };
