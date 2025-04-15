# Project Requirements: San Miguel Citizen Social Platform

## 1. Project Goal

Build a simple, modern web platform (like X/Twitter) for citizens of San Miguel, Chile, to share updates, report issues, and interact with their local government. The platform should be easy to use, mobile-friendly, and support real-time updates.

## 2. Core Features

- **Citizen Feed:**

  - Users can create posts (text, images, videos).
  - Posts can include hashtags and location (using browser geolocation).
  - Feed displays all posts in reverse chronological order.
  - Users can filter posts by hashtag, location, or keyword.

- **Issue Reporting:**

  - Users can mark a post as an "Issue Report".
  - Issue reports are highlighted in the feed and can be tracked for status (Received, In Progress, Resolved).

- **Municipal Dashboard:**

  - Admins (municipal staff) can view, filter, and moderate all posts.
  - Admins can respond to posts and update issue statuses.
  - AI-powered filtering and prioritization using Google Cloud Natural Language API (e.g., sentiment, keyword extraction).

- **Event Announcements:**

  - Municipality can post events (title, description, date, location).
  - Events appear in a separate calendar view.

- **Authentication:**

  - Citizens and staff register and log in.
  - Staff have admin privileges.

- **Real-time Updates:**

  - New posts, comments, and status changes appear instantly (using Supabase real-time features).

- **Light/Dark Mode:**

  - The platform must support both light and dark themes.
  - Users can toggle between light and dark mode in the UI.
  - Theme preference should persist across sessions (e.g., stored in user profile or local storage).

- **Analytics Tools for Municipal Staff:**
  - The municipal dashboard should include analytics and reporting tools.
  - Staff can view statistics such as:
    - Number of posts and issue reports over time.
    - Sentiment analysis trends (from AI).
    - Most common keywords/topics.
    - Response and resolution times for issue reports.
    - Engagement metrics (e.g., active users, post frequency).
  - Analytics should be visualized with charts/graphs for clarity.

## 3. Technology Stack

- **Frontend:** React (TypeScript)
- **Backend/API:** Supabase (PostgreSQL, Auth, Storage, Realtime)
- **AI/Filtering:** Google Cloud Natural Language API
- **Hosting:** Supabase, Vercel/Netlify (for frontend)
- **Other:** Socket.IO (optional, if needed for custom real-time features)
- **Important:** Avoid mixing Django and Supabase’s own REST/auth APIs for the same data. For each data domain (e.g., posts, users), use either Django or Supabase REST/auth APIs exclusively, not both.

## 4. User Roles

- **Citizen:**
  - Can create posts, report issues, view feed, and see event calendar.
- **Municipal Staff (Admin):**
  - Can moderate posts, respond to citizens, manage events, and update issue statuses.

## 5. Key Outcomes

- Simple, familiar social feed for local communication.
- Easy issue reporting and tracking for citizens.
- Efficient moderation and prioritization for municipal staff.
- Real-time, transparent updates for all users.

## 6. Localization

- All UI and content should support Spanish (default) and be easily translatable.

## 7. Data API Consistency

- For each data type or feature, choose either Django or Supabase REST/auth APIs for all CRUD/auth operations, not both. This avoids data consistency and security issues.

## 8. Responsive Design

- The platform must be fully responsive and look good on all device sizes (mobile, tablet, desktop).
- Use a mobile-first approach for layout and components.
- All pages, navigation, and forms should adapt gracefully to different screen widths.

---
