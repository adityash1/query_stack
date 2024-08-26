# Query-Stack

A full-stack Q&A platform built with Next.js 14, MongoDB and Gemini AI integrated.

## Tech Stack

- **Frontend**: Next.js 14, Shadcn UI, TailwindCSS
- **Backend**: Next.js server actions, Mongoose
- **AI Integration**: Google Generative AI
- **Authentication**: Clerk via webhooks

## Key Features

- Server-side rendering for improved SEO and performance
- Next.js server actions for CRUD operations 
- Real-time updates by utilising revalidatePath ([nextjs/cache](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)) for optimistic UI
- AI-powered answer generation using Google Generative AI
- Reputation system with MongoDB aggregation pipelines
- Global search functionality
- Responsive design with TailwindCSS

## Running Locally
Clone the repository & install dependencies
```bash
git clone https://github.com/adityash1/query_stack.git
pnpm install
```
Add the required environment variables in `.env` (example file provided in `.env.example`). You will need to make an account on [Clerk](https://clerk.com/) and [TinyMCE](https://www.tiny.cloud/) to get API keys.

Then, run in development mode

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

| Path               | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `app`         | The Next.js application frontend.                                  |
| `database`   | Mongoose models for the database                                              |
| `lib/`  | zod validations schemas, utils, etc. |
| `lib/actions` | Next.js server actions.                         |

## API Routes
- `/api/webhook`: user management via clerk auth
- `/api/gemini`: AI-powered answer generation based on the question context.

## Deployment

This application is configured for deployment on Vercel. Ensure environment variables are properly set in the Vercel dashboard before deploying.