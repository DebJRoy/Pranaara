# Pranaara E-commerce Platform

A high-end, production-ready e-commerce website for Pranaara Perfumes built with Next.js 14, TypeScript, and modern web technologies.

## 🌟 Features

### Core Features
- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom luxury styling
- **ShadCN/UI** components for consistent design
- **Framer Motion** for smooth animations
- **Prisma ORM** with PostgreSQL database
- **NextAuth.js** for authentication (Google OAuth)
- **Stripe** payment integration
- **Cloudinary** for image management
- **SEO optimized** with metadata and Open Graph tags
- **Fully responsive** design for all devices

### E-commerce Functionality
- Product catalog with categories and filtering
- Shopping cart and wishlist
- User authentication and profiles
- Order management system
- Admin dashboard for product management
- Customer reviews and ratings
- Newsletter subscription
- Contact forms

### Performance & Quality
- **Accessibility** (a11y) best practices
- **Performance optimized** with lazy loading
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **Docker** support for containerized deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Cloudinary account
- Stripe account
- Google OAuth credentials (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Pranaara_Ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env.local
   ```
   Fill in your environment variables (see [Environment Variables](#environment-variables) section)

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push database schema
   npx prisma db push
   
   # Seed database with sample data (optional)
   npx prisma db seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/pranaara_db"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe Configuration
STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-stripe-webhook-secret"

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"

# Email Configuration (Resend)
RESEND_API_KEY="your-resend-api-key"
FROM_EMAIL="noreply@pranaara.com"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_COMPANY_NAME="Pranaara"

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_META_PIXEL_ID="your-meta-pixel-id"
NEXT_PUBLIC_HOTJAR_ID="your-hotjar-id"
```

## 🗄️ Database Schema

The application uses Prisma ORM with PostgreSQL. Key models include:

- **User** - Customer accounts and authentication
- **Product** - Perfume products with variants and images
- **Category** - Product categorization
- **Order** - Purchase orders and items
- **Review** - Customer reviews and ratings
- **CartItem** - Shopping cart functionality
- **WishlistItem** - Customer wishlists
- **Address** - Customer shipping addresses

### Database Commands

```bash
# View database in browser
npx prisma studio

# Reset database
npx prisma db push --force-reset

# Generate migration
npx prisma migrate dev --name init
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   ├── shop/              # Shop and product pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/                # Base UI components
│   ├── layout/            # Layout components
│   ├── forms/             # Form components
│   └── sections/          # Page sections
├── lib/                   # Utility libraries
│   ├── auth.ts            # NextAuth configuration
│   ├── db.ts              # Database connection
│   └── utils.ts           # Helper functions
├── styles/                # Global styles
├── types/                 # TypeScript definitions
└── hooks/                 # Custom React hooks
```

## 🎨 Styling & Design

The application uses a luxury design system with:

- **Custom color palette** with gold accents
- **Typography** using Inter, Playfair Display, and Cormorant Garamond
- **Glass morphism** effects and gradients
- **Micro-interactions** and hover states
- **Mobile-first** responsive design

### Custom CSS Classes

```css
.btn-luxury          /* Gradient luxury button */
.card-luxury         /* Premium card styling */
.gradient-luxury     /* Luxury background gradient */
.text-gradient-gold  /* Gold text gradient */
.glass               /* Glass morphism effect */
```

## 📱 Pages & Routes

### Public Pages
- `/` - Home page with hero and featured products
- `/shop` - Product catalog with filtering
- `/product/[slug]` - Product detail pages
- `/about` - About us and brand story
- `/contact` - Contact form and information

### User Pages
- `/auth/signin` - Sign in page
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/account` - User dashboard
- `/orders` - Order history
- `/wishlist` - Saved products

### Admin Pages
- `/admin` - Admin dashboard
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/users` - User management

## 🔐 Authentication

The application uses NextAuth.js for authentication with support for:

- **Google OAuth** - Social login
- **Email/Password** - Traditional authentication
- **Database sessions** - Secure session management
- **Role-based access** - User and admin roles

## 💳 Payment Integration

Stripe integration provides:

- **Secure checkout** with Stripe Checkout
- **Multiple payment methods** (cards, wallets)
- **Webhook handling** for order updates
- **Subscription support** (future enhancement)

## 📸 Image Management

Cloudinary integration offers:

- **Optimized delivery** with automatic format selection
- **Responsive images** with multiple sizes
- **Transformation pipeline** for consistent sizing
- **SEO-friendly** alt text and lazy loading

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main branch

### Docker Deployment

```bash
# Build Docker image
docker build -t pranaara-ecommerce .

# Run container
docker run -p 3000:3000 pranaara-ecommerce
```

### AWS Amplify

1. **Connect repository** to AWS Amplify
2. **Configure build settings** and environment variables
3. **Deploy** with automatic SSL and CDN

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema
npm run db:seed      # Seed database
npm run db:studio    # Open Prisma Studio
```

### Code Quality

- **ESLint** configuration for Next.js and TypeScript
- **Prettier** for consistent code formatting
- **TypeScript** strict mode enabled
- **Husky** pre-commit hooks (optional)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📊 Analytics & Monitoring

The application supports:

- **Google Analytics** for web analytics
- **Meta Pixel** for social media tracking
- **Hotjar** for user behavior insights
- **Sentry** for error monitoring (future enhancement)

## 🔮 Future Enhancements

- **AI-powered fragrance recommendations**
- **WhatsApp Business integration**
- **Loyalty points system**
- **Advanced analytics dashboard**
- **Multi-language support**
- **Progressive Web App (PWA)**
- **Subscription boxes**
- **AR fragrance try-on**

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: dev@pranaara.com
- **Documentation**: [docs.pranaara.com](https://docs.pranaara.com)
- **Issues**: GitHub Issues tab

---

**Made with ❤️ for Pranaara Perfumes** 