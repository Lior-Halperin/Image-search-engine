
# Image Search Engine - Mobile Application
This is an image search engine full-stack mobile application.

## Introductions
This project is a full-stack mobile application for searching and displaying images according to various 
parameters, based on external api.

## Features

* **Authorization.** 
* **Display images on 3X3 square by category.**
* **Pagination.**
* **Display details about the image by clicking on it.**

## Methods

| Method              | Explanation                                                                                        |                             
| ------------------- | ----------------------------------------------------------------------------------------------------------------------|

| **Global State**    | Management with Redux. |
| **AsyncStorage**    | Token storage. |
| **complexity O(1)** | Creating function with a complexity of O(1), see an explained example in path "Service/ImagesCollectionService". |
| **Authentication**  | User identity verification. |
| **REST API**        | Using the Express library to read (get) and update (post) data. |




## Tech Stack

**Client:** React Native, React Native Elements, TypeScript, Redux, JWT, Axios, Ngrok, AsyncStorage, expo .

**Server:** Node.js, Express, CORS, JWT, Axios, Joi.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Lior-Halperin/Image-search-engine.git
```
**The following commands must be applied for both layers, frontend and backend.**

Go to the project directory

```bash
  cd Image-search-engine\enter the layer name
```

Install dependencies

```bash
  npm install
```

```bash
  npm install -g expo-cli
```

**The following commands are only for backend layers** 
Start the server

```bash
  npm start
```

**The following commands are only for frontend layers** 
Run the app

```bash
npx expo start
```

press a for android emulator
```bash
a
```

I recommend to use android studio to display a virtual mobile simulator
see explanation at  https://www.youtube.com/watch?v=0-S5a0eXPoc&list=PL7SWe83BfZpGchElwYEueVL0Kf3VlYpxQ&index=6

## Authors

- [@Lior-Halperin](https://www.github.com/Lior-Halperin)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lior-halperin-25a90b219/)


