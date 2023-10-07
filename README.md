## Project Live link
- **Live link:** [https://rad-scone-2a6802.netlify.app/](https://rad-scone-2a6802.netlify.app/)



## Project Features

- **Promotion of Health and Wellness:**
  - The website prominently promotes the theme of "Your Health, Your Future" and encourages users to ignite wellness and transform their lives. It provides a message of well-being and self-improvement.

- **Authentication Handling:**
  - The website features authentication functionality, as indicated by the usage of the UserContext. It can identify whether a user is logged in or not. If a user is not logged in, they are redirected to the login page, ensuring that certain routes are protected and accessible only to authenticated users

- **Private Route Protection:**
  - The PrivateRoute component is designed to protect specific routes from unauthorized access. When a user tries to access a protected route, they will be redirected to the login page  if they are not authenticated. This feature enhances the security and privacy of certain sections of the website.

- **Login with Google:**
  - In addition to traditional email and password login, this website offers users the option to log in with their Google accounts. Clicking the "Login with Google" button triggers the loginWithGoogle function, which authenticates users using their Google credentials. Upon successful login, users are redirected to the destination specified in the location.state object, and a success message is displayed.

- **Responsive Design:**
  - The website is designed to be responsive, It adapts to various screen sizes and orientations, ensuring that the service information is displayed in an organized and visually appealing manner on different devices. This responsiveness improves the user experience, making the website accessible from both desktop, tablet and mobile devices.
