# Beer Collection Application

![Beer Collection App Preview](./public/beer-collection-preview.png)

## 🚀 Getting Started

Ready to explore the world of craft beers? Setting up is just three simple steps away!

```sh
git clone git@github.com:Maku4/Impact-beer-case.git
npm i
```
Make sure you are in the correct directory in the terminal.

## 🛠 Development Environment

Fire up the DevServer:

```sh
npm start
```
-> http://localhost:3000

## 💬 Features

- 🎯 Overview: Infinite list of beers fetched from PunkAPI.
- 🎯 Details: Dive deep into individual beer details with a click.
- 🎯 Beer Addition: Expand your collection by adding new beer bottles.
- 🎯 Available on all screen devices.

## 🎨 What about extended functionality?
Due to limited time, I focused on the main functionalities. As an addition, I added infinite scrolling and user friendly multistep form for adding custom beers.

## 📝 Architecture Considerations

- Priorities:
Speed development, usability, design simplicity, maintainability

- Local Storage Management:
I used the browser's local storage to store the custom beer data. This choice simplifies the architecture for this proof of concept and avoids the need for an external backend or database. The data is stored in JSON format, making it easier to retrieve and manage.

- Typescript:
TypeScript was used to provide static type-checking. This adds an additional layer of reliability to the code, catching potential type-related bugs during development.

- SSR:
Fetching a collection of beers from the API has been reduced to client side rendering due to the desire to implement infinite scrolling.

- SEO:
It's a proof of concept, so SEO is completely basic here.

- Reusability of components:
I see that the reusability of components could be at a higher level, i.e. BeerTile should be built on the principle of a reusable component, e.g. Card. However, it's a small app, so I didn't want to focus on building an entire ecosystem.

- Image Handling:
Images are uploaded and displayed using Object URLs, which are memory-friendly as they're automatically released when no longer in use. In a production app, images would likely be uploaded to a CDN or a file server and referenced by URL.

- Error Handling:
Basic error handling (e.g., checking for null or undefined values) has been added. However, for a production-level app, more robust error handling and validations would be needed.

- Validation:
For a production-level app, more robust would be needed.

Conclusion:
This project is a proof of concept using Next.js, TypeScript, TailwindCSS and browser APIs. It can serve as a foundation for a more feature-rich application in the future.
