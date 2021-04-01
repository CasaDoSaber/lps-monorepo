module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: `/:path*`,
          },
          {
            source: '/como-melhorar-relacoes',
            destination: `https://christian-dunker-como-se-relacionar.vercel.app/como-melhorar-relacoes`,
          },
          {
            source: '/como-melhorar-relacoes/aula-01',
            destination: `https://christian-dunker-como-se-relacionar.vercel.app/como-melhorar-relacoes/aula-01`,
          },

        ]
      },    
      env: {
        CASA_API_AUTHORIZATION:'$2a$05$t76bq95pBmGm3Y8PjthQiOs8mVgWvu5ZGIsIkLPNbiwH2e60u7UtO',  
        NEXT_PUBLIC_GA_TRACKING: 'UA-178602651-2',
        GTM_ID: "GTM-PXKGLX6",
    },
  };