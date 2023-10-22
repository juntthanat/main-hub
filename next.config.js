/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:  'uploads.mangadex.org',
                port: '',
            }
        ]
    }
}
