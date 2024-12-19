   # My_Blogs

<p align="center">
    <img src="readme_assets/amiresponsive.png" width=600>
</p>
<p align="center">
    Image generated using <a href="https://ui.dev/amiresponsive" target="_blank">https://ui.dev/amiresponsive</a>
</p>

## Project goals

My  Blogs  is designed to be traveller to show them where to travel and technology news. The primary goals of the web app are to:
This project is a dynamic blogging platform named Blog Guide, built with React.js for the front-end and integrates with a backend API to fetch, display, and manage blog posts. It supports multiple categories, featured blogs, and detailed blog post pages.
Deliver a simple and intuitive user experience, suitable for adults and tech literate children aged 10+. 
 Offer a minimal set of impactful features chosen in order to deliver a useful app within an achievable development timeframe, while laying a solid foundation for additional features in the future.

This is the repository for the React frontend of My Blogs.
The project also utilises a Django Rest Framework web API, the repository for which is located [here](https://github.com/andy-guttridge/tribehub_drf).

## Table of contents
- [My blogs](#My_blogs)
  * [Project goals](#project-goals)
  * [Table of contents](#table-of-contents)
  * [User stories](#user-stories)
    + [Themes](#themes)
    + [User stories](#user-stories-1)
  * [Agile development methodology](#agile-development-methodology)
  * [Planning](#planning)
  * [Design](#design)
    + [Colours](#colours)
    + [Fonts](#fonts)
  * [Features](#features)
    + [Header with welcome message, notifications menu and sign-out button](#header-with-welcome-message--notifications-menu-and-sign-out-button)
    + [Bottom navbar](#bottom-navbar)
    + [Drop-down notifications menu](#drop-down-notifications-menu)
    + [Home page with family calendar](#home-page-with-family-calendar)
    + [Add event and search buttons](#add-event-and-search-buttons)
    + [Calendar events detail displayed below calendar](#calendar-events-detail-displayed-below-calendar)
    + [Edit event and delete event buttons](#edit-event-and-delete-event-buttons)
    + [Add event form](#add-event-form)
    + [Edit event form](#edit-event-form)
    + [Family contacts page](#family-contacts-page)
    + [Add contacts and search contacts buttons](#add-contacts-and-search-contacts-buttons)
    + [Add contact form](#add-contact-form)
    + [Search contacts form](#search-contacts-form)
    + [Edit contact and delete contact buttons](#edit-contact-and-delete-contact-buttons)
    + [Edit contact form](#edit-contact-form)
    + [Account page with My Tribe, My Profile, Change Password and Delete Account](#account-page-with-my-tribe--my-profile--change-password-and-delete-account)
    + [My Tribe](#my-tribe)
    + [My Profile](#my-profile)
    + [Change password](#change-password)
    + [Delete account](#delete-account)
    + [Modal dialogs to confirm or cancel destructive actions](#modal-dialogs-to-confirm-or-cancel-destructive-actions)
    + ['Single page mode' for medium and large screen sizes](#-single-page-mode--for-medium-and-large-screen-sizes)
    + [Prompts for new users](#prompts-for-new-users)
    + [Success messages](#success-messages)
    + [Error messages](#error-messages)
    + [Darkmode](#darkmode)
    + [Re-use of components](#re-use-of-components)
      - [`Avatar.js`](#-avatarjs-)
      - [`ConfirmModal.js`](#-confirmmodaljs-)
      - [`NotificationItem.js`](#-notificationitemjs-)
      - [`Spinner.js`](#-spinnerjs-)
      - [`Account.js`](#-accountjs-)
      - [`TribeMember.js`](#-tribememberjs-)
      - [`Contacts.js`](#-contactsjs-)
      - [`Contact.js`](#-contactjs-)
      - [`ContactDetailsForm.js`](#-contactdetailsformjs-)
      - [`CalEvent.js`](#-caleventjs-)
      - [`EventDetailsForm.js`](#-eventdetailsformjs-)
    + [CRUD functionality](#crud-functionality)
    + [Future improvements and features](#future-improvements-and-features)
      - [Short term future improvements](#short-term-future-improvements)
      - [Longer term future features](#longer-term-future-features)
  * [Frameworks, libraries and dependencies](#frameworks--libraries-and-dependencies)
    + [React-Calendar](#react-calendar)
    + [React-Router-DOM](#react-router-dom)
    + [ReactDOM](#reactdom)
    + [Axios](#axios)
    + [JWT Decode](#jwt-decode)
    + [Tailwind CSS](#tailwind-css)
    + [daisyUI](#daisyui)
    + [React Bootstrap Icons](#react-bootstrap-icons)
  * [React features used to enhance user experience](#react-features-used-to-enhance-user-experience)
    + [Custom hooks](#custom-hooks)
  * [Testing](#testing)
    + [Manual testing](#manual-testing)
    + [Validator testing](#validator-testing)
    + [W3C CSS validator](#w3c-css-validator)
    + [ESLint JavaScript validator](#eslint-javascript-validator)
    + [WAVE web accessability testing](#wave-web-accessability-testing)
    + [Lighthouse testing](#lighthouse-testing)
    + [Resolved bugs](#resolved-bugs)
    + [Unresolved bugs](#unresolved-bugs)
  * [Deployment](#deployment)
  * [Credits](#credits)
    + [Code](#code)
    + [Media](#media)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>



### User stories
User stories required to implement each epic were created. These were categorised according to whether they were 'must have' features required to implement a Minimum Viable Product (MVP).

## Agile development methodology

GitHub issues and projects were used to document and track an agile development approach.
A GitHub issue was created for each user story, with labels to indicate if they were required for the MVP. A GitHub milestone was created to represent the product backlog. All user stories were initially added to the product backlog.

A project kanban board was used to track progress, with user stories moved between 'Todo', 'In Progress' and 'Done' columns as appropriate. For example, the iteration 2 project board was captured at the start, in the middle and at the end:


The project boards in their final form can be accessed at [TribeHub GitHub Project Boards](https://github.com/andy-guttridge/tribehub_react/projects?query=is%3Aopen).

Additionally, Notion was used to note and track other miscellanious tasks as they arose during development.

### Colours

The primary design aim was to create a simple and functional appearance. One of the reasons the  curated color palette was chosen. Custom CSS combined with Bootstrap ensures modern, responsive layouts.Placeholder images harmonize with the overall color scheme for design coherence.

A white background was chosen for the site's main theme, to maximise contrast and provide a clean, straighforward and uncluttered look.

The main colour palettes used for light and dark modes are:



### Home for Blogs 
The Home component is a React functional component designed to serve as the landing page for the Blog Guide application. It introduces the user to the website and highlights key features, while also providing navigation to other sections of the site.
  
  ### Features
## Welcome Section

 Headline and Subheading: Welcomes users with a headline ("Welcome to Blog Guide!") and a short description of the site's purpose (travel guides and tech tips).

- Call-to-Action Buttons:

- Explore Blog: Directs users to the blog page via a button 
  styled with Bootstrap.

- Learn More About Us: Links to the About Us page.

- Search: Provides quick access to the Search page.

  ## Featured Content Section

# Image Display:

-Displays a placeholder image representing the blog's themes (travel and technology).

- Image path: /workspace/My_Blogs/media/bet george.jpg (ensure 
   the correct path to the actual image).

- Informative Content:
  
- A heading explaining the value of the blog.
 
- Key points listed as bullet points:

- Comprehensive travel guides.

- Easy-to-follow tech tips.

- Updated content from experts.

- Contact Button: Provides a link to the Contact page for user 
  interaction.

  

### Blog Component

### Overview

The Blog component is a dynamic React module designed to showcase blog posts retrieved from an API. It features:

- A highlighted featured blog post displayed prominently.

- A grid-based layout for other blog posts.

- Quick navigation links to categories like "World," 
  "Technology," and "Travel."

- Integration with client-side routing for seamless navigation.

- Fallback mechanisms to ensure a smooth user experience when 
  data is unavailable.

The component uses React hooks (useState, useEffect) for state management and lifecycle behavior, and Bootstrap for responsive design.

## Features and Functionalities

### 1. Featured Blog Display

- Displays the most significant blog post fetched from the 
  /api/blog/featured endpoint.

- Includes title, excerpt, and a link to read more.

- Styled using a dark-themed Bootstrap jumbotron for visual 
  emphasis.

### 2. Blog Grid Layout

- Dynamically renders blog posts in a responsive, two-column 
  grid.

- Each post card includes:

- Category: Capitalized for consistency.

- Title and Excerpt: Summarized blog details.

- Thumbnail Image: Uses the provided URL or a fallback 
  placeholder.

- Read More Link: Navigates to the detailed post view.

### 3. Category and Search Navigation

- Includes links to predefined categories and a search page.

- Enables seamless filtering and exploration of blog content.

## File Location 

- The component is located at:/src/components/Blog.js
  
## Core Logic and Components

### 1. Import Statements

- The following libraries are utilized:

   - React: For building the UI.
      import React, { useState, useEffect } from 'react';

    - Axios: For HTTP requests.
      import axios from 'axios';

  - React Router DOM: For navigation.
import { Link } from 'react-router-dom';

## 2. State Variables

- blogs: Array of all blogs retrieved from the API.

- featuredBlog: Object containing details of the featured blog 
   post.

## 3. Helper Functions

- getMediaURL(path): Constructs full media URL or returns the 
  default image.

- capitalizeFirstLetter(word): Capitalizes the first character 
  of a given string.

## 4. useEffect Hooks

- Fetches data from the following endpoints upon component 
  mount:

- /api/blog/featured for the featured blog.

- /api/blog/ for all blog posts.

## 5. Rendering Logic

- Featured Blog: Highlighted with its own jumbotron section.

- Blog Grid: Displays blog cards in a structured layout using 
  Bootstrap grid classes.

- Navigation Links: Simple category links styled for 
  accessibility.
  
## Blog Detail Component 

### Overview

The BlogDetail component is a React module designed to display detailed information about a single blog post. It fetches the blog data from an API based on the blog's slug (identifier) and renders its title, category, date, content, and thumbnail image in a visually appealing layout.

The component uses React hooks (useState, useEffect) to manage state and lifecycle events. It leverages React Router's useParams hook for dynamic URL handling and axios for API integration.

## Features

### 1. Blog Content Rendering

- Dynamically fetches blog details from the /api/blog/:slug 
  endpoint using the slug parameter from the URL.

- Renders blog content, including:

- Title: Highlighted as the main header.

- Category: Capitalized for consistency.

- Date: Displays the publishing month and day.

- Thumbnail Image: Displays a responsive image for the blog 
  post.

- Content: Rendered as HTML using dangerouslySetInnerHTML.

## 2. Navigation Link

- Includes a link to navigate back to the list of blogs.

## 3. Error Handling

- Handles cases where the blog data is not yet available or 
  fails to load.

## Core Logic and Components

### 1. Import Statements

- The following libraries are utilized:

- React: For building the UI.
import React, { useState, useEffect } from 'react';
- Axios: For HTTP requests.
import axios from 'axios';

- React Router DOM: For dynamic routing.
import { useParams, Link } from 'react-router-dom';

### 2. State Variables

- blog: Object containing details of the current blog post.

## 3. useEffect Hook

- Fetches the blog data from the API using the slug parameter 
  from the URL.

## 4. Helper Functions

- createBlog(): Safely renders HTML content of the blog post 
  using dangerouslySetInnerHTML.

- capitalizeFirstLetter(word): Capitalizes the first character 
  of a given string.

## Category Component 

### Overview

The Category component is a React module designed to display a list of blog posts within a specific category. It dynamically fetches data from an API, organizes blog posts, and displays them in a visually structured layout. Users can navigate between categories and view blog details.

This component utilizes React hooks (useState, useEffect) for state and lifecycle management, React Router for dynamic routing, and axios for API requests.

### Features

### Blog Listing

- Dynamically fetches blog posts based on the selected category 
  from the /api/blog/category endpoint.

- Displays blog post details, including:

- Title: Main blog title.

- Category: Capitalized for consistency.

- Date: Month and day of publication.

- Excerpt: Brief description of the blog post.

- Thumbnail: Image displayed alongside blog details.

### Navigation

- Includes links to other categories for seamless navigation.

- Dynamic category updates based on the URL.

## Error Handling

- Handles cases where API requests fail or return no data.

 ## Category Component 

### Overview

The Category component is a React module designed to display a list of blog posts within a specific category. It dynamically fetches data from an API, organizes blog posts, and displays them in a visually structured layout. Users can navigate between categories and view blog details.

This component utilizes React hooks (useState, useEffect) for state and lifecycle management, React Router for dynamic routing, and axios for API requests.

### Features

### Blog Listing

- Dynamically fetches blog posts based on the selected category 
  from the /api/blog/category endpoint.

- Displays blog post details, including:

- Title: Main blog title.

- Category: Capitalized for consistency.

- Date: Month and day of publication.

- Excerpt: Brief description of the blog post.

- Thumbnail: Image displayed alongside blog details.

### Navigation

- Includes links to other categories for seamless navigation.

- Dynamic category updates based on the URL.

## Error Handling

- Handles cases where API requests fail or return no data.

### CRUD functionality
My Blogs features full Create, Read, Update and Delete functionality, via the UI implemented in React and the Django Rest Framework API.

- Create - Create a new record in the database. For example, adding a new blog category like "travel."

Flow:
Front-End: The user inputs data in a form (e.g., category name) and clicks the "Add" button.
Back-End: The data is sent via an HTTP POST request to the API endpoint. The server processes this request, creates a new record in the database, and returns the newly created record in the response.
### 2. READ
## Purpose:
  Retrieve and display data from the database. For example, 
  fetching a list of all blog categories.

## Flow:
-  Front-End: When the page loads, the application sends an 
   HTTP GET request to fetch the data.
- Back-End: The server processes the GET request, retrieves the 
  data from the database, and sends it back as a JSON response.

### Future improvements and features

#### Short term future improvements
-creating comment , email , and name text box for the user to comment for eache of differnt blogs.

### React-Router-DOM
- Key Features of React Router DOM
1 **Single Page Application (SPA) Navigation:** React Router DOM allows your application to navigate between different "pages" without reloading the browser. This makes the user experience faster and more seamless.

2. **Dynamic Routing: It enables routing based on parameters, like :id in your routes (e.g., /blog/:id or /category/:id), which is essential for creating dynamic pages.

3. **Declarative Routing:** Routes are declared directly in the JSX structure, making the routing configuration intuitive and readable.

4. **Nested Routes:** You can structure routes hierarchically, matching your application's layout and component tree.

## How React Router DOM Helps in Your Project
1.**Routing Between Pages:**

- The Routes component defines all the paths for your 
  application (/, /blog, /category/:id, /blog/:id).
  Users can switch between these pages without refreshing the 
  browser, maintaining the SPA experience.

2. **Dynamic Parameters for Content:**

- Paths like /category/:id and /blog/:id allow you to create 
  pages dynamically based on the parameter (id or slug).
- For instance:
- Visiting /category/world shows blogs tagged under "World."
- Visiting /blog/123 loads the details for the blog with id=123.

3.**Link Component for Navigation:**

- The <Link> component replaces traditional <a> tags to prevent 
  full-page reloads.
- It creates seamless navigation while maintaining browser 
  history.


### Axios
- [Axios](https://www.npmjs.com/package/axios) - the axios library was chosen to simplify making HTTP requests to the REST API (e.g. not having to manually configure HTTP headers),

  ## How Axios Works in Your Application
1. **Making API Requests**
Axios simplifies making HTTP requests like GET, POST, PUT, and DELETE. You use these requests to interact with your backend API.
- Uses axios.get to retrieve data from the /api/blog/ endpoint.
- Updates the blogs state with the retrieved data.

 2. **CRUD Operations with Axios**
Here's how Axios enables CRUD operations:

**Create**
- Send data to your backend to create new records using POST.
- newBlog is an object containing the blog details.
  Read
- Fetch data using GET, as seen in your project:
- The response data (res.data) is assigned to the state 
  (blogs), allowing the UI to display it.
**Update**
- Modify an existing record using PUT or PATCH.
- id is the blog's identifier, and updatedBlog contains the 
  updated details.
**Delete**
- Remove a record using DELETE.
- After deletion, you can update the UI by removing the deleted 
  blog from the state.
  
3. **Handling API Responses**
- Axios provides the API response object, which includes:
  - data: The returned data from the server.
  - status: The HTTP status code (e.g., 200 for success, 404 
     for not found).
  - headers: The response headers.
  - 
4. **Error Handling**
- Axios makes error handling straightforward using try-catch 
  blocks or .catch():

5. **Reusable Axios Instances**
 - To avoid repeating the base URL in every request, you can - 
 - create a reusable Axios instance:

    **Benefits of Using Axios**
1.Simplifies Requests: Provides cleaner syntax compared to 
   native fetch.
2.Handles Promises: Built-in support for async/await and 
  .then/.catch makes it easy to work with asynchronous requests.
3. Error Handling: Differentiates between server and network 
   errors, making debugging easier.
4. Customizable: Allows custom headers, timeouts, and 
   interceptors for logging or token management.
5. Automatic JSON Handling: Automatically parses JSON responses 
   and sets Content-Type to application/json for requests.

   **How Axios Enhances Your Project**
- Simplifies communication with the backend API for fetching - 
- blog data and managing CRUD operations.
- Handles errors gracefully, providing a better user experience.
- Works seamlessly with React state management (useState and 
  useEffect), enabling dynamic and responsive UI updates.
- Allows dynamic routing (/blog/:id, /category/:id) to display 
  specific data.





javascript
Copy code



. 



### React Bootstrap Icons
- [React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons) - this icon library was selected for the high quality and simplicity of the icons, and easy integration with React.

## React features used to enhance user experience
### Custom hooks
The `useSingle` page custom hook is used throughout the app so that components can check whether the app is currently running in 'single page' mode, and render themselves accordingly, for example by applying appropriate CSS classes for the 'mobile' versus 'single page' views. Many components are reliant on a `useCurrentUser` hook to determine whether the current user is authenticated, and to obtain various details about the user such as profile image, display name and whether they have tribe admin status. 

## Testing

### Manual testing
Manual tests were devised for each user story to be implemented for the project. 
These were performed on the final, deployed version of the site and are documented on the [TribeHub user stories spreadsheet](https://docs.google.com/spreadsheets/d/11wcDHeqr85VaHXdJjATod_WECRY03IRUlGgT_L_ikIw/edit#gid=0).

Several tests failed on the first attempt. In these cases, details of how the issues were addressed and the outcome of further testing are provided. All tests were passed after issues were resolved.

In addition, the site was deployed early and subject to continual user testing throughout the development process. This resulted in a number of enhancements to the user experience, which are documented in the user stories and planning sections above.

### Automated tests
Four automated tests were written for the `Header.js` component. These are in `src/components/__tests__/Header.test.js`.

The tests are as follows, and all passed:

- Test that the Header component renders with the logo text, and without a sign-out button when the user is not authenticated.
- Test that the Header renders a welcome message with the user's name when authenticated.
- Test that the Header renders a sign-out button for an authenticated user.
- Test that the Header does not render a welcome message or sign-out button after an authenticated user has pressed the sign-out button.

### Validator testing

### W3C CSS validator
All CSS files were passed through the W3C validator. The following errors and warnings were flagged:

- The TailwindCSS `@apply` directive was identified as a 'CSS hack' and in some cases as a 'parse error'. `@apply` is a directive provided by TailwindCSS that allows multiple utility classes to be applied to a single CSS class. This is particularly useful when working with existing libraries and components that do not themselves use Tailwind, and was essential for integrating `react-calendar` with Tailwind. It was also used to globally apply styles to specific HTML elements, for example Google Fonts are defined as Tailwind classes in `tailwind.config.js` and these classes are then applied globally to elements such as headings, paragraphs etc in `index.css`.

    These warnings and errors relating to `@apply` were flagged in `Calendar.module.css`, `Landing.module.css`, `TribeHome.css`. They were ignored as this is a valid TailwindCSS directive which generates valid CSS for the browser and is required to correctly style some components in TribeHub. Additionally, the TailwindCSS linter for VSCode flagged no errors for these.

- The `:global` selector which can be used in CSS modules to apply styles globally is not parsed by the W3C validator. This is used extensively in the `Calendar.module.css` file to override the default CSS classes defined in the library with Tailwind/daisyUI classes. 

    These validator errors were ignored as `global:` is identified as valid syntax in the [CSS modules documentation](https://github.com/css-modules/css-modules) and is required to correctly apply CSS styles to the calendar.

- The `@tailwind` and `@layer` rules provided by TailwindCSS and used in the `index.css` file were flagged as errors. These were ignored as they are valid Tailwind syntax and not flagged as errors by the Tailwind linter.

- An invalid value of `scaleY(100%)` was used for the `transform` property in `ContactDetailsForm.module.css`, `ContactSearch.module.css`, `EventDetailsForm.module.css`, `EventSearch.module.css` and `TribeMemberDetailsForm.module.css`. This was corrected to `scaleY(1)` in each case.

- A warning that `skewY()` is a vendor extension was flagged in `Landing.css`. The MDN web docs reference for this CSS function identifies high browser compatibility, so this warning was ignored.
<p align="center">
    <img src="readme_assets/skewy.png" width=500>
</p>

- Warnings about `-apple-system`, `-webkit-font-smoothing` and `-moz-osx-font-smoothing` vendor extensions were flagged in `index.css`. These were ignored as they are generated by the TailwindCSS installation and necessary for the library.

### ESLint JavaScript validator

All JavaScript files were validated using the ESLint JavaScript validator.
The following issues were identified and corrected:

- Unnecessary semi-colons at the end of some statements.
- Unescaped apostrophies in HTML text in some components.
- An unused variable.
- Missing React import statements.

### WAVE web accessability testing

Testing with the WAVE validation revealed the following issues:

- Contrast issues with buttons. The text colour for buttons in the primary and secondary colour was lightened, while outline buttons were changed from primary to a dark (or light for dark mode) colour, and the font size was increased for all buttons. This successfully resolved the issues.

- Contrast issues were also detected between the dots on the calendar indicating where there are events for a given day. This was more difficult to address, because the calendar cells can have a number of different colours depending on their current state. After some experimentation, the `mix-blend-mode` attribute with a value of `difference` was used on these elements to invert their colour against that of the background. This means the colour of these indicators might not fit as well with the colour scheme of the site, but it eliminates the contrast issues.

- Three further contrast errors were found, but these were ignored as they apply to hidden elements which provide additional information for screen readers.

- Avatar images throughout the website had the same text for the alt attribute. This was addressed by passing a `displayName` prop through to the Avatar component, and using this to generate an appropriate alt text value for each user.

- Several form elements with no label were flagged on the profile update form and the event search form (caused by missing or incorrect id attributes on input elements), and one element with a duplicate id on the contacts form (caused by a naming clash with another element on the add event form).

- The label containing the notifications indicator was found to contain no text. This was rectified by putting a `<span>` element with the Tailwind CSS `sr-only` class inside the label, providing a read out of the number of notifications present for screen readers but visually hidden. This label was also flagged as orphaned from its form control by the Wave validator, however this was not fixed, as the label is used instead of a button for the DaisyUI dropdown component in order to overcome a bug in Safari.

- Missing labels were found for the input elements which are part of the DaisyUI collapse components used to reveal further detail for each calendar event. This was rectified by passing the unique key value generated for each CalEvent instance as a `calEventId` prop, using this to generate a unique id for each input and associating a screen reader only label to each one.

- The Wave report contained an alert about the `noscript` element. This was to flag that content within this element must be accessible. Since the element contains a simple text reminder that JavaScript must be enabled to use the website, this was deemed not to be an issue.

- Skipped heading levels in the notification items menu and on calendar events were identified. The former was addressed by changing the `h3` elements used in the `NotificationItem` component to `h2` and styling to look like `h3`. The headings for event titles on calendar events were changed from `h4` to `h3`, which would appear to be correct as the next heading above them is an `h2`, however this did not resolve the validator error. `h2` and `h1` were also tested for these headings, but this still did not resolve the error. These elements were then changed to `p` and the error was resolved. The `h5` headings within the 'details' collapse component at the bottom of calendar events were also changed to `p` elements to resolve similar errors.

- Category icons on calendar events did not have unique text for the `alt` attribute. This was due to a bug rather than an oversight, and was corrected. Wave then flagged a 'redundant alternative text' alert, meaning that another nearby element had an image with the same `alt` text. This is because more than one event in the list of events had the 'shopping' category - given the purpose and meaning of the icon, a repeat occurence of the alt text is correct and was deemed not to be an issue.

### Lighthouse testing

Lighthouse testing was undertaken in incognito mode for every URL for mobile and in single page mode, in both light and dark modes, and on the landing page, sign-in page and registration page. Each page/section was tested with add, edit and search forms and modal dialogs open.

WAVE validation had already been completed and most accessability issues fixed, however lighthouse did reveal that button elements did not have id attributes, which are required by assistive technologies. 

After this issue had been addressed, every page achieved 100% for accessability.
All pages achieved 100% for best practices, except for the landing, registration and sign-in pages, where HTTP 401 errors in the console reduced the score to 92%. This is expected as a consequence of a non-authenticated user being redirected away from content requiring authorisation.

Performance scores were not as high, ranging from a low of 61% for the contacts page with the search form being opened on mobile to 90% for the app in single page mode with the add tribe member form being opened. Performance scores for the majority of pages/scenarios ranged from the low 70s to high 80s. The same potential performance improvements were identified in each case:

- Serve images in next gen formats.
- Reduce unused JavaScript.
- Eliminate render-blocking resources (e.g. deliver critical JavaScript and CSS inline).
- Minify JavaScript.
- Efficiently encode images.
- Preload larges contentful paint image.
- Serve static assets with efficient cache policy.
- Avoid chaining critical requests.
- Use user timing marks and measures.
- Keep request counts low and transfer sizes small.
- Avoid large layout shifts.
- Avoid long main-thread tasks.

The hero image on the landing page was compressed in order to improve loading time. The other potential improvements could be implemented in a future iteration.

<p align="left">
    <span>Lowest lighthouse score: contacts page with search form open, mobile: </span>
    <br />
    <img src="readme_assets/lighthouse_mobile_search_contact.png" height=100>
</p>
<p align="left">
    <span>Typical lighthouse score: tribe home page with add events form open, mobile: </span>
    <br />
    <img src="readme_assets/lighthouse_mobile_tribe_home_add_events.png" height=100>
</p>
<p align="left">
    <span>Highest lighthouse score: single page mode with add tribe member form open, desktop: </span>
    <br />
    <img src="readme_assets/lighthouse_single_page_desktop_add_tribe_member.png" height=100>
</p>

### Resolved bugs
- During implementation of the `NotificationItem` component, requests to the REST API for the data for the events with which each notification is associated were frequently resulting in an HTTP 500 internal server error. A version of the API running on a development server was used for debugging. This revealed that the number of simultaneous requests for data coming from a large number of NotificationItems was overwhelming the free tier ElephantSQL database server. The fix was to add the full data for each event to the notification JSON served by the API, which meant that only one network request was required to fetch the notification and event data together. 
- During testing, a large amount of empty space was noted at the bottom of each page, but only for some user accounts. No elements causing this could be identified using the Chrome developer tools, and elements were manually removed from each component until the culprit was found. This revealed that the unordered list of notifications inside the DaisyUI dropdown component used for the notifications menu was taking up vertical space in the document even when closed/not visible. This was only noticeable for users with a large number of notifications and hence a very long list inside the menu. The issue was addressed by applying the Tailwind CSS hidden class to the unordered list when not visible. An event listener was added to detect clicks outside of the menu and close the list accordingly.
- After search functionality had been added, it became apparent that edits to events and event deletions made from events in the search results were not reflected in the calendar. This was fixed by passing `childDidSaveEvent` and `setChildDidSaveEvent` props down through the component tree to `EventSearch.js` component, through to the `CalEvent.js` component  and on to the `EventDetailsForm.js` component, to trigger the calendar to reload it's data after a change has been made. This was a 'quick fix' to correct the bug, and would be a candidate for refactoring in future.

### Unresolved bugs
- Users accessing TribeHub from iOS devices, Safari on MacOS, Samsung Internet on Samsung devices and possibly others must turn off 'Prevent Cross Site Tracking' (Apple devices), 'Smart Anti-Tracking' (Samsung devices) or other similar features in order to use the web app. This is because the Django Rest Framework API and the React front-end are hosted on separate domains using Heroku, and cross-domain requests from the front-end to the API are blocked by these anti-tracking features. It appears there is no solution to this, other than to host the API and front-end on the same domain (reference - https://stackoverflow.com/questions/56972162/is-there-a-workaround-for-safari-ios-prevent-cross-site-tracking-option-when).

## Deployment
To deploy to Heroku, follow these steps:

- Fork or clone this repository in GitHub.
- If you have also cloned and deployed your own version of the TribeHub Django Rest Framework API, you will need to ensure the value of `axios.defaults.baseURL` in `src/api/axiosDefaults.js` is set to the base URL for your API. Pull to your local development environment and push back to GitHub if necessary; otherwise, leave as is to use the original TribeHub API.
- Log in to Heroku.
- Select 'Create new app' from the 'New' menu at the top right.
- Enter a name for the app and select the appropriate region.
- Select 'Create app'.
- Select the 'Deploy' tab at the top.
- Select 'GitHub' from the deployment method options to confirm you wish to deploy using GitHub. You may be asked to enter your GitHub password.
- Find the 'Connect to GitHub' section and use the search box to locate your repo.
- Select 'Connect' when found.
- Optionally choose the main branch under 'Automatic Deploys' and select 'Enable Automatic Deploys' if you wish your deployed site to be automatically redeployed every time you push changes to GitHub.
- Find the 'Manual Deploy' section, choose 'main' as the branch to deploy and select 'Deploy Branch'.

When deployment is complete, you will be given a link to the deployed site.

## Credits

### Code
- How to use the React Router `<BrowserRouter>` component to provide history context to `<Router>` components is from [this Stack Overflow article](https://stackoverflow.com/questions/65425884/react-router-v6-error-useroutes-may-be-used-only-in-the-context-of-a-route)
- The technique to use an event handler to store the current size of the window in state variables in order to conditionally render components was adapted from [this Stack Overflow question](https://stackoverflow.com/questions/62954765/how-to-do-conditional-rendering-according-to-screen-width-in-react)
- Code to handle current user context in `src/contexts/CurrentUserContext.js` was adapted from Code Institute 'Moments' React walkthrough lessons
- Code to create and use axios interceptors to refresh tokens in `src/contexts/CurrentUserContext.js` and `src/utils/utils.js` was adapted from the Code Institute 'Moments' React walkthrough lessons
- The technique to add modal dialogs to the end of the body element in the DOM is from [upmostly.com](https://upmostly.com/tutorials/modal-components-react-custom-hooks)
- How to use the `:global` selector in CSS to ensure styles are overriden in a React component is from [Stack Overflow](https://stackoverflow.com/questions/42191671/css-modules-reactjs-parent-and-child-css-classes-in-different-components)
- How to use `require` to ensure webpack processes local images is from [Stack Overflow](https://stackoverflow.com/questions/34582405/react-wont-load-local-images)
- How to use CSS filters to colour a SVG is from [Stack Overflow](https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element)
- How to define a CSS class as part of a DaisyUI theme is from [GitHub](https://github.com/saadeghi/daisyui/discussions/640)
- How to iterate over the keys of a JavaScript object in React is from [Stack Overflow](https://stackoverflow.com/questions/40803828/how-can-i-map-through-an-object-in-reactjs)
- The technique for handling multiple selection elements in controlled React forms is from [Stack Overflow](https://stackoverflow.com/questions/50090335/how-handle-multiple-select-form-in-reactjs)
- How to correctly use the useCallback hook to declare a function outside of useEffect and call from inside useEffect to enable code reuse is from [Stack Overflow](https://stackoverflow.com/questions/56410369/can-i-call-separate-function-in-useeffect)
- How to add a number of minutes to a DateTime object is from [StackOverflow](https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object)
- The technique for using a timer to prevent excessive network requests when the values of input elements on a search form change is from the Code Institute Moments walkthrough project
- How to redirect to an appropriate page when the user enters an invalid URL using the Navigate component from React-Router-DOM has been adapted from [copycat.dev](https://www.copycat.dev/blog/react-router-redirect/)
- How to use Google Fonts in a Tailwind CSS project is from [daily-dev-tips.com](https://daily-dev-tips.com/posts/using-google-fonts-in-a-tailwind-project/)
- How to invert the colour of an element compared to its background is from [Stack Overflow](https://stackoverflow.com/questions/17741629/how-can-i-invert-color-using-css)
- How to create divs with diagonal lines is from [9elements.com](https://9elements.com/blog/pure-css-diagonal-layouts/)
- How to use the text-shadow CSS attribute to add an outline to text is from [Stack Overflow](https://stackoverflow.com/questions/57464935/font-outline-using-only-css)
- How to configure JEST to allow tests with Axios v1 and above is from [Stack Overflow](https://stackoverflow.com/questions/74940474/jest-encountered-an-unexpected-token)

The following documentation was referenced extensively throughout the project:

- [React documentation](https://react.dev/reference/react)
- [React Router Documentation](https://v5.reactrouter.com/)
- [TailwindCSS documentation](https://tailwindcss.com/docs/)
- [DaisyUI documentation](https://daisyui.com/components/)

### Media
- Placeholder screenshots image used on the wireframes by u_fg0tkeqgiy on [Pixabay](https://pixabay.com/vectors/view-web-secure-image-ipad-laptop-7321141/).
- Hero image used on the landing page by Pexels on [Pixabay](https://pixabay.com/photos/child-couple-daylight-family-1844901/).
- Placeholder avatar image used on the wireframes and in the app by Stephanie Edwards on [Pixabay](https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/).
- Fidget spinner image used for loading spinner by b0red on [Pixabay](https://pixabay.com/vectors/fidget-spinner-add-a-d-spin-2304681/)
- Images used for event category icons:
  - Club icon used for club by Clker-Free-Vector-Images on [Pixabay](https://pixabay.com/vectors/clubs-cards-club-shape-card-games-33561/)
  - Mortar board icon used for education Clker-Free-Vector-Images on [Pixabay](https://pixabay.com/vectors/graduation-cap-graduation-education-311979/)
  - Medical bag icon used for medical by OpenClipart-Vectors on [Pixabay](https://pixabay.com/vectors/red-cross-aide-assistance-158454/)
  - Musical note icon used for music by ruhbastard on [Pixabay](https://pixabay.com/vectors/music-note-music-note-musical-notes-1967480/)
  - Metallic O icon used for other by Clker-Free-Vector-Images on [Pixabay](https://pixabay.com/vectors/english-alphabets-o-letters-15th-33793/)
  - Shopping trolley icon used for shopping by Clker-Free-Vector-Images on [Pixabay](https://pixabay.com/vectors/shopping-cart-caddy-shopping-trolley-304843/)
  - Volley ball icon used for sport by Clker-Free-Vector-Images on [Pixabay](https://pixabay.com/vectors/volleyball-sport-black-white-306791/)
  - Aeroplane icon used for vacation by GDj on [Pixabay](https://pixabay.com/vectors/jumbo-jet-airplane-aeroplane-1801305/)
  - Office desk icon used for work by OpenClipart-Vectors on [Pixabay](https://pixabay.com/vectors/computer-office-worker-typing-146329/)
  - Present icon used for celebration by chachaoriginal on [Pixabay](https://pixabay.com/vectors/red-icon-present-gift-wrapped-1902863/)
  - Car icon used for outing by Clker-Free-Vector-Images on [Pixabay](https://pixabay.com/vectors/car-automobile-sedan-four-door-car-35502/)
  - Cat icon used for pets by Lohrelei on  [Pixabay](https://pixabay.com/vectors/cat-kitten-sitting-silhouette-1144200/)
- Fonts:
    - [Google Fonts Fredoka One](https://fonts.google.com/?query=fredoka+one&sort=popularity)
    - [Google Fonts Nunito](https://fonts.google.com/specimen/Nunito?query=nunito&sort=popularity)
    - [Google Fonts Lato](https://fonts.google.com/?query=lato&sort=popularity)
