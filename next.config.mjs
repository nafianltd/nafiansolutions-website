/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      outputFileTracingIncludes: {
        "/slice-library": ["./slices/**/*"],
      },
    },
    webpack(config) {
      // Add SVGR loader for SVG files
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              // Optional: Customize options for SVGR here
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  