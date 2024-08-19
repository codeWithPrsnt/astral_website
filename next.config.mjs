/** @type {import('next').NextConfig} */
const nextConfig =  {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-alpha-sig.figma.com',
          port: '',
          pathname: '/img/**',
        },
        {
          protocol:'https',
          hostname:'astralpaints.kwebmakerdigitalagency.com',
          port:'',
          pathname:'/**',
        },
      ],
    },
    
  };

export default nextConfig;
