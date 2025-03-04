### READ ME

--- Project Phase 1 --- - Create a blogsite post with: - Sign up - Sign in - Log out - When logged in: Dashboard with the blog articles (title, author, date, image, text)

## GOALS

- [DONE] Set up directus database on Render.com.
- [DONE] Create a simple "article" collection on directus database.
- [DONE] Enable Public Registration on Directus - allows any user to create a user
- [ ] MVP: Set up directus authentication for login, logout, signup
- [ ] Check if the codes properly call out all the authentication & functions created.
- [ ] Set up author role to only be able to edit their own content -> Created user must be automatically author role.

- Modularization:
  - Review code to plan for DRY high level (layouts)
  - Review code for needed error handling (user facing and dev facing)
  - Outline and build components (minimal styles, focus on functionality)
  - Style content and make it responsive

## DEBUG

- [FIXED] Welcome page : landing page not showing (restriction: doesn't have any access)
  - created a _global_ (can be named anything) collection in Directus that would serve as our "landing page" for our public users.
  - Settings -> User Roles -> Public -> choose "Global collection" -> Allow to READ only.
- [FIXED] Users sign-up not following through.
  - created posts collection
    - Created an "Authenticated Users" -> so that every new registration automatically sets to this.
    - Added {"author": "$CURRENT_USER"} and other customization
    - Enabled public registration : settings -> public registration -> public registration role -> Authenticated Users
    - Also added an error message which tells the users to create atleast 8 min for passwords

## GLOSSARY

- [./lib/directus.jsx] : this is where we call requests to our Directus API (handles authentication, REST API)
- *REGISTER* [./app/api/auth/register/route.jsx] : uses Directus SDK "registerUser" functionality -> take email & password -> redirect to dashboard when successful. 
  - THEN [./app/register/page.jsx] : this is the "form" that the users see, where they type in the email & password
- *USER LOG IN* [./app/api/auth/login/route.jsx] : login functionality, take the email & password in the submitted form, redirect to dashboard when succesful.
  - THEN [./app/login/page.jsx] : front end which users see (log in credentials)
- *Data Access Layer* [./lib/dal.jsx] : server only, checks if user has "session cookie" -> if not send to login page 
- *Dashboard* [./app/dashboard/page.jsx] : will be shown upon logging in.
## RESOURCES

[Deploy Directus on Render.com](https://blog.jamin.sh/how-to-deploy-directus-to-rendercom)
[Directus Authentication in Next JS](https://directus.io/docs/tutorials/getting-started/using-authentication-in-next-js)
