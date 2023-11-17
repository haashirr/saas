/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "oaidalleapiprodscus.blob.core.windows.net",
        ]
    },
    experimental: {
        serverMinification: false,
      }
}

module.exports = nextConfig
