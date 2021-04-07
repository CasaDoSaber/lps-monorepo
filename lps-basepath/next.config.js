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
          {
            source: '/como-melhorar-relacoes/confirme-inscricao',
            destination: `https://christian-dunker-como-se-relacionar.vercel.app/como-melhorar-relacoes/confirme-inscricao`,
          },

        ]
      },    
      env: {
        
        NEXT_PUBLIC_GA_TRACKING: 'UA-178602651-2',
        GTM_ID: "GTM-PXKGLX6",
    },
  };
