# GitHub Copilot Instructions: Citizen-Government Interaction Platform (San Miguel, Chile)

**Project Context:**

We are building a web platform to improve communication and engagement between citizens of San Miguel, Chile, and their local government. This platform will include features for citizen posting, issue reporting, an event calendar, a municipal dashboard for managing citizen interactions, light/dark mode support, and analytics tools for municipal staff.

**Technology Stack:**

- **Frontend:** React (TypeScript)
- **Backend:** Django (Python)
- **Database:** PostgreSQL (Supabase)
- **Real-time:** Socket.IO (if needed)
- **AI:** Google Cloud Natural Language API or AWS Comprehend
- **Important:** Avoid mixing Django and Supabase’s own REST/auth APIs for the same data. For each data domain (e.g., posts, users), use either Django or Supabase REST/auth APIs exclusively, not both.

**General Instructions for Copilot:**

- **Prioritize Clarity and Readability:** Write code that is easy to understand and maintain. Use meaningful variable names and add comments where necessary.
- **Follow Best Practices:** Adhere to established best practices for React, TypeScript, Django, and Python development.
- **Consider Performance:** Write efficient code, keeping in mind the potential for a growing user base in San Miguel.
- **Think Modular:** Break down features into smaller, reusable components and functions.
- **Error Handling:** Implement appropriate error handling for API calls and user interactions.
- **Focus on the User Story:** When working on a specific feature, keep the user story in mind to ensure the implementation meets the intended outcome.
- **Do Not Mix Django and Supabase REST/auth APIs for the Same Data:** For each data type or feature, choose either Django or Supabase REST/auth APIs for all CRUD/auth operations, not both. This avoids data consistency and security issues.

**Specific Instructions by Feature:**

**1. Citizen Posting:**

- **Component:** Create React components for creating, displaying, and managing citizen posts.
- **Functionality:** Implement features for text input, image/video uploads, location tagging (consider using browser geolocation or a map library), and hashtag input.
- **Backend Integration (Django API):** Implement API endpoints in Django to create, retrieve, and store citizen posts in the Supabase database.

**2. Municipal Office Interface (Dashboard):**

- **Component:** Develop React components for the municipal dashboard.
- **Functionality:** Implement views for displaying all citizen posts, filtering (by keywords, location, date, issue/general), and sorting (by date, AI priority).
- **AI Integration:** Call the Google Cloud Natural Language API or AWS Comprehend from the Django backend to analyze citizen post sentiment and keywords for prioritization. Display this information in the dashboard.
- **Response Feature:** Allow municipal staff to respond to citizen posts via the Django API.
- **Analytics Tools:** Provide analytics and reporting tools for municipal staff, including:
  - Number of posts and issue reports over time.
  - Sentiment analysis trends.
  - Most common keywords/topics.
  - Response and resolution times for issue reports.
  - Engagement metrics (e.g., active users, post frequency).
  - Visualize analytics with charts/graphs.

**3. Issue Reporting:**

- **Integration with Posting:** Instead of a separate form, when a citizen creates a post, they should be able to easily indicate if it's an issue report.
- **Automatic Tagging:** Implement logic (potentially using basic keyword detection or the chosen AI service) in the Django backend to automatically tag posts as "Issue Report" or "General Information."
- **Status Tracking (Municipal Dashboard):** In the municipal dashboard, provide a way to view and update the status of "Issue Report" posts (e.g., Received, Acknowledged, In Progress, Resolved).
- **Status Visibility (Citizen):** Allow citizens to view the status of their reported issues (potentially within their profile or in the main feed).

**4. Local Event Calendar:**

- **Component:** Create a React component to display the event calendar.
- **Backend Integration (Django API):** Implement Django models and API endpoints to store and retrieve event data (title, description, date, time, location, organizer).
- **Admin Interface (Django Admin or custom):** Provide an interface for authorized municipal staff to add, edit, and delete events.
- **Filtering:** Implement filtering options in the React component (by date, category, location).

**5. Other Local Information Sharing:**

- **Component:** Create React components to display announcements and general information.
- **Backend Integration (Django API):** Implement Django models and API endpoints for managing announcements and general information.
- **Admin Interface:** Provide an interface for authorized staff to add, edit, and delete this content.

**6. User Authentication:**

- **Frontend (React):** Implement user registration and login forms.
- **Backend (Django):** Use Django's built-in authentication system or a library like Django REST Framework's authentication to handle user accounts (citizens and municipal staff with different roles/permissions).

**7. Real-time Updates:**

- **Backend (Django with Socket.IO):** If needed for immediate updates on new posts or issue status changes, integrate Socket.IO into the Django backend.
- **Frontend (React with Socket.IO Client):** Implement the Socket.IO client in React to receive and display real-time updates.
- **Consider Supabase Realtime:** Explore Supabase's built-in real-time database subscriptions as a potentially simpler alternative for certain real-time features.

**8. Light/Dark Mode:**

- **UI Requirement:** The platform must support both light and dark themes.
- **Toggle:** Users can toggle between light and dark mode in the UI.
- **Persistence:** Theme preference should persist across sessions (e.g., stored in user profile or local storage).

**Specific Instructions for TypeScript:**

- **Use Explicit Types:** Define clear types for all variables, function parameters, and return values.
- **Utilize Interfaces and Types:** Create interfaces and types to define data structures for API responses, component props, and state.
- **Enable Strict Mode:** Configure the TypeScript compiler with strict mode enabled for better type safety.

**Specific Instructions for Django:**

- **Follow MVC/MTV Pattern:** Adhere to Django's Model-View-Template (though we'll primarily be using it as an API, so focus on Models, Views, and Serializers).
- **Use Django REST Framework:** Build API endpoints using Django REST Framework for easy serialization and authentication.
- **Secure Your API:** Implement proper authentication and authorization to protect API endpoints.

**Remember the location: San Miguel, Santiago Metropolitan Region, Chile. Consider any potential localization needs (e.g., Spanish language).**

By following these instructions, Copilot should be able to assist efficiently in developing the Citizen-Government Interaction Platform.
