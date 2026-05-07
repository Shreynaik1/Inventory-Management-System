## ⚙️ Tech Stack

- **Next.js 15** – React framework with App Router and Server Components
- **React 19** – Component-based UI development with latest features
- **TailwindCSS** – Utility-first CSS for modern styling
- **Stack Auth** – Modern authentication solution (replaces NextAuth.js)
- **Prisma** – Type-safe database ORM with migrations
- **PostgreSQL** – Robust relational database
- **Lucide Icons** – Clean and beautiful icon pack
- **Recharts** – Data visualization for analytics
- **TypeScript** – Type safety and enhanced developer experience
- **Vercel** – Deployment and hosting platform

---

## ⚡️ Features

- 🔐 **Modern Authentication** - Secure user registration and login with Stack Auth
- 📊 **Dashboard Analytics** - Real-time metrics, charts, and inventory insights
- 📦 **Product anagement** - Complete CRUD operations for inventory items
- 🔍 **Search & Filtering** - Find products quickly with search functionality
- 📄 **Pagination** - Efficient data loading for large inventories
- ⚠️ **Low Stock Alerts** - Automated notifications for inventory levels
- 💰 **Value Tracking** - Monitor total inventory value and financial metrics
- 📈 **Visual Analytics** - Interactive charts showing inventory trends
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, professional interface with TailwindCSS
- 🚀 **Server Actions** - Form handling with Next.js Server Actions
- 🔄 **Real-time Updates** - Instant UI updates after data changes

---

## 👌 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [PostgreSQL Database](https://www.postgresql.org/) (or use Neon for cloud hosting)

### Clone and Run

```bash
git clone https://github.com/yourusername/nextjs-fullstack-inventory.git
cd nextjs-fullstack-inventory
npm install
```

### Environment Setup

1. Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/inventory_db"
NEXT_PUBLIC_STACK_PROJECT_ID="your_stack_project_id"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your_publishable_key"
STACK_SECRET_SERVER_KEY="your_secret_key"
```

2. Set up your database:

```bash
npx prisma migrate dev
npx prisma generate
```

3. Start the development server:

```bash
npm run dev
```

Your app will be available at: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Screenshots


<img width="1897" height="858" alt="Screenshot 2026-05-08 031406" src="https://github.com/user-attachments/assets/7ea130d9-5e15-42c4-8d8e-19720f49d33e" />

<br/><br/>

<img width="1882" height="873" alt="Screenshot 2026-05-08 030833" src="https://github.com/user-attachments/assets/4245248d-b474-4b23-b377-16a12f05c0f6" />

<br/><br/>

<img width="1912" height="857" alt="Screenshot 2026-05-08 031559" src="https://github.com/user-attachments/assets/9e783c1b-7552-436e-b498-5bb1a24a64a5" />

<br/><br/>

<img width="1892" height="855" alt="Screenshot 2026-05-08 031546" src="https://github.com/user-attachments/assets/56efe70a-daac-4fc3-8c0a-dfa4f6298862" />

<br/><br/>

<img width="1917" height="857" alt="Screenshot 2026-05-08 031433" src="https://github.com/user-attachments/assets/d3203822-58ea-4153-ab23-7c4d4d830d3b" />

<br/><br/>

<img width="1917" height="857" alt="Screenshot 2026-05-08 031419" src="https://github.com/user-attachments/assets/3f00df65-aa07-4a4a-a307-a5889ff5d3d8" />
```



---

## ☁️ Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add your environment variables in the Vercel dashboard
5. Click **Deploy**

Your live application will be hosted on a custom subdomain (e.g. https://your-inventory-app.vercel.app)

### Database Setup

For production, consider using:

- [Neon](https://neon.tech/) - Serverless PostgreSQL
- [Supabase](https://supabase.com/) - Open source Firebase alternative
- [PlanetScale](https://planetscale.com/) - MySQL-compatible database

---


- [Next.js Documentation](https://nextjs.org/docs)
- [Stack Auth Documentation](https://docs.stack-auth.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Recharts Documentation](https://recharts.org/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).


--Shrey Naik
