# SCP O5 Dashboard

This project is a web application designed to manage and display information related to O5 candidates within the SCP Foundation. It features a user-friendly interface for viewing candidates based on their points earned in their respective departments and provides a dashboard for managing user assignments and points without requiring a login.

## Project Structure

- **src/components**: Contains React components for the application.
  - **O5List.tsx**: Displays a list of possible O5 candidates based on their points.
  - **Dashboard.tsx**: Provides an interface for managing points and user assignments.

- **src/pages**: Contains the main pages of the application.
  - **index.tsx**: The main entry point that renders the O5List component.
  - **dashboard.tsx**: Renders the Dashboard component for managing user data.

- **src/lib**: Contains utility files.
  - **supabaseClient.ts**: Configured Supabase client for database interactions.

- **src/types**: Contains TypeScript interfaces for data structures.
  - **index.ts**: Defines interfaces for User and Department.

- **public**: Contains static assets.
  - **favicon.ico**: The favicon for the website.

- **netlify.toml**: Configuration settings for deploying the site on Netlify.

- **package.json**: Lists dependencies, scripts, and metadata for the project.

- **tsconfig.json**: TypeScript configuration file specifying compiler options.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd scp-o5-dashboard
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure Supabase**:
   - Create a Supabase project and set up your database.
   - Update the `src/lib/supabaseClient.ts` file with your Supabase URL and public API key.

4. **Run the application**:
   ```
   npm run dev
   ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- The main page displays a list of O5 candidates sorted by their points.
- The dashboard allows administrators to manage user points and assignments easily.

## License

This project is licensed under the MIT License. See the LICENSE file for details.