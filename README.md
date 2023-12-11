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

- Home Page <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 03 19" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/913f6dcb-86b7-4027-b9cf-ce859b5ef330"> <br/><br/>
- Skeleton Loading <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 03 57" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/0ebecc5e-a56f-4d61-b604-5347fd34419b"> <br/><br/>
- Search Result <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 04 03" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/e8e1ca91-68fb-486d-aabb-2db9942066db"> <br/><br/>
- Not Found Result <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 04 14" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/22e4cb30-7fed-4229-8dd9-08f7d86ecb96"> <br/><br/>
- Error Page <br/><br/> <img width="1920" alt="Screenshot 1402-02-26 at 22 04 46" src="https://github.com/ghmasood/jabama-code-challenge/assets/33165677/967b449b-d82e-4991-987f-3b53c1fd0a0a">
