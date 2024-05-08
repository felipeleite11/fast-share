/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'integrare-os-minio.nyr4mj.easypanel.host'
		  },
		  {
			protocol: 'https',
			hostname: 'minio.robot.rio.br'
		  }
		]
	  }
};

export default nextConfig;
