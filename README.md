# PLP Application App

This project was created for the Azki-vam code challenge. In this project, we implemented a proudcts list page with some filters. You can see the [live demo](http://azkivam.gh-masoud.ir/), which is powered by Vercel. 
<br/>
I store the query params in the URL and sync them with filters. All API calls are server-side rendered with fallback error messages displayed.
<br/>
You can improve this project by adding an application page and other features! To use this project, you can run development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Features:

- Load a list of products on the home page with a **infinite load** by scrolling
- Include category filters and merchants filter
- Include a skeleton card loading animation until the data is fully loaded
- Design and implement responsive design using SCSS.
- Filter section have reset button and with click on title, section collapsed 
- Implement an error page and a not found message with a link to return to the home page.

### Used packages:

- React
- NextJs
- TypeScript
- SASS
- iconssax

### Additonl thing:

- **Server:** I used this [Api Document](https://interview-api.azkiloan.com/api-docs/) for fetching data.

### Project folder structure:
    .
    ├── public                  # Public Assets
    ├── src                     # Source files 
    │   ├── assets              # Styles and other assets that needs to be transpiled at the build time
    │   ├── components          # All Major and Minor Components will place here
    │   ├── hooks               # custom hoom
    │   ├── pages(app)          # Next.js File routings/App Directory
    |   ├── types               # Global types
    ├── config files            # .env files, docker files, bundler configs, .eslintrc, package.json, tsconfig.json, etc. 
    └── README.md
### Component folder structure:
    .
    │   ├── ...
    │   └── components                      
    |           ├── ExampleComponent                   # ExampleComponent Folder
    |           |       ├── components                 # Sub Components of Example Component
    |           |       ├── componentName.module.scss  # Modular Styles
    |           |       └── index.tsx                  # Main File (only contains imports, hook calls and jsx codes)
    │           ├── ...
    
### Snapshots:

- Home Page <br/><br/> <img width="1920" alt="Screenshot 1402-09-20 at 18 37 22" src="https://github.com/ghmasood/azkivam-code-challenge/assets/33165677/586b7acb-cb98-4ffe-8e03-b75770917ef6"> <br/><br/>
- Skeleton Loading <br/><br/> <img width="1920" alt="Screenshot 1402-09-20 at 18 45 21" src="https://github.com/ghmasood/azkivam-code-challenge/assets/33165677/a1ce7c60-b819-423f-ac50-d005a287fcb7"> <br/><br/>
- Search Result <br/><br/> <img width="1920" alt="Screenshot 1402-09-20 at 18 37 39" src="https://github.com/ghmasood/azkivam-code-challenge/assets/33165677/713b3866-c55f-42b3-a5d7-f68bd953c8f7"> <br/><br/>
- Mobile View <br/><br/>
  <table ><tr  >
    <td valign="top" width="50%">
        <img width="624" alt="Screenshot 1402-09-20 at 18 38 37" src="https://github.com/ghmasood/azkivam-code-challenge/assets/33165677/83bb1dab-f5c6-4cb2-859e-cf60928d8b3e">
    </td>
    <td valign="top" width="50%">
        <img width="624" alt="Screenshot 1402-09-20 at 18 38 34" src="https://github.com/ghmasood/azkivam-code-challenge/assets/33165677/f4afb258-8c0a-44cb-85c2-6d030024e33a">
    </td>
  </tr></table>
  <br/><br/>
- Not Found Result <br/><br/> <img width="1920" alt="Screenshot 1402-09-20 at 18 39 24" src="https://github.com/ghmasood/azkivam-code-challenge/assets/33165677/23000f74-80a7-4675-a809-1e1cc83cdced"><br/><br/>
- Error Page <br/><br/> <img width="1920" alt="Screenshot 1402-09-20 at 18 39 38" src="https://github.com/ghmasood/azkivam-code-challenge/assets/33165677/bd283006-bfe4-4626-93ab-4756ba950183"> <br/><br/>

