## General information

- **Public URL**: https://thinhngoo.github.io/CSC13114_IA02-Photo-gallery/
- **Tech**: Vite + React + TypeScript

## Requirements

- [x] (2pt) Display a Grid/List of Photos: Displays photos in a responsive, well-styled grid/list with author info.

  - [x] Fetch a list of photos from the Unsplash API using their public API.
  - [x] Display the photos in a responsive grid or list view on the page.
  - [x] Each photo should display a thumbnail (a small version of the image) and the author’s name.

- [x] (1pt) Infinite Scroll (Scroll to Load More): Infinite scroll works smoothly, with seamless loading of new photos and clear loading indicators.

  - [x] As the user scrolls down the page, loads more photos automatically from the Unsplash API.
  - [x] Use pagination or the "page" parameter from the Unsplash API to fetch additional pages of photos.
  - [x] Add a loading indicator that shows when new photos are being fetched.
  - [x] Handle cases where there are no more photos to load (end of list).
  - [x] When a user clicks on any photo, navigate to a detailed view of that specific photo.

- [x] (2pt) In the detailed view, show the following: Displays full photo, title, author, and description. Provides a good user experience.

  - [x] The full-size image.
  - [x] The photo title (if available) or placeholder text.
  - [x] The author’s name.
  - [x] The photo description (if available) or placeholder text.

- [x] (1pt) Navigation and Routing: URLs are intuitive and functional.

  - [x] Use React Router or equivalent library for navigation between the list of photos and the detailed photo view.
  - [x] Implement appropriate URLs such as /photos for the list and /photos/:id for the detailed view.

- [x] (1pt) API Integration: Successfully fetches data from the Unsplash API, handles loading and error states well.

  - [x] Use the Unsplash API to fetch data. You’ll need to sign up for an API key at Unsplash Developers.
  - [x] Use the official API endpoint to retrieve the list of photos and individual photo details.
  - [x] Handle loading states and errors appropriately while fetching data.

- [x] (1pt) Styling and Responsiveness: App is well-designed, fully responsive across devices, with additional style considerations.

  - [x] The UI should be responsive for both desktop and mobile screens.
  - [x] Add some basic styling, but the emphasis is more on functionality than appearance. Use a CSS framework like Bootstrap, Material UI, or plain CSS.

- [x] (1pt) Code quality: Code is well-organized, with comments, reusable components, and follows React best practices.
- [x] (1pt) Public hosting: Upload to public host.

## Scripts

Do the following steps to run project locally:

```js
  pnpm install
```

```js
  pnpm dev
```
