const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
  }
}


module.exports = nextConfig
