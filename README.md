# Flavourly

A recipe sharing platform with nutritionist verification.

## 🚀 Quick Start

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd flavourly
   pnpm install
   ```

2. **Set up environment variables:**

   ```bash
   pnpm run setup
   ```

   This will create a `.env.local` file with all required environment variables.

3. **Set up the database:**

   ```bash
   pnpm run db:seed
   ```

4. **Start the development server:**

   ```bash
   pnpm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ☁️ Cloudinary Setup (Optional)

For media uploads (profile pictures, recipe images), you'll need to configure Cloudinary:

### Option 1: Quick Setup

```bash
pnpm run setup:cloudinary
```

This interactive script will guide you through the setup process.

### Option 2: Manual Setup

1. Create a free account at [Cloudinary](https://cloudinary.com/)
2. Get your credentials from the dashboard
3. Update your `.env.local` file with:
   ```env
   CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
   CLOUDINARY_API_KEY=your-actual-api-key
   CLOUDINARY_API_SECRET=your-actual-api-secret
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
   ```

### Option 3: Disable Cloudinary

If you don't want to use media uploads:

```bash
pnpm run disable:cloudinary
```

## 🧪 Testing

Test authentication error handling:

```bash
pnpm run test:auth
```

## Troubleshooting

### Authentication Errors

If you see "Configuration" or "Sign In Failed" errors:

1. **Check Environment Variables**: Ensure your `.env.local` file has the required variables:

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   DATABASE_URL=your-database-url
   ```

2. **Database Connection**: Make sure your PostgreSQL database is running and accessible.

3. **Database Seeding**: Ensure the database is properly seeded with roles:

   ```bash
   pnpm run db:seed
   ```

4. **Common Error Messages**:
   - "Invalid email or password" - Check your credentials
   - "No account found" - Create an account first
   - "User already exists" - Try signing in instead
   - "Configuration error" - Check your environment variables

### Common Issues

- **"Configuration" Error**: Missing or incorrect `NEXTAUTH_SECRET` or `NEXTAUTH_URL`
- **Database Connection Errors**: Check your `DATABASE_URL` and ensure PostgreSQL is running
- **Role Not Found**: Run `pnpm run db:seed` to create required roles

## Features

- User authentication with role-based access
- Recipe creation and management
- Nutritionist verification system
- Recipe collections and favorites
- Meal planning
- Shopping list generation
- Media upload support

## Tech Stack

- Next.js 15
- NextAuth.js
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- React Query
- Cloudinary (media uploads)
