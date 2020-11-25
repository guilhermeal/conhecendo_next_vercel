# Knowing the Next.Js & Vercel
### First steps

This project was create with finality of studies, following the guide by [Youtube Channel by Filipe Deschamps](https://www.youtube.com/watch?v=EW7m2WIvFgQ&feature=youtu.be).

### New Features!

  - Initial settings

### Dependences

We are use a number of open source libs to work properly:

* [NextJS] - The React Framework
for Production!
* [ReactJS] - React is a JavaScript library for building user interfaces.!
* [ReactDOM] - Specific methods to use in HTML DOM! 

### Installation

This application requires [Node.js](https://nodejs.org/) v10+ to run.

Start project installing Npm package.json.

```sh
$ cd <package-folder>
$ npm init -y
```

Install the dependencies.

```sh
$ npm install next
$ npm install react
$ npm install react-dom
$ node app
```

Change script from package.json.
From:
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

To:
```js
"scripts": {
    "dev": "next dev"
},
```
### Create pages

Create a folder in the root project called "pages" and our pages will be here.

Example:
```sh
/pages/index.js
```

```js
function Home() {
  return <div>Home</div>
}

export default Home;
```

### Run locally

```sh
npm run dev
```

### Todos

 - Make run

License
----

ISC


**Live and learn**


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/guilhermeal/conhecendo_next_vercel.git>
   [guilhermeal]: <http://guilhermeal.com.br>
   [NextJS]: <https://nextjs.org/>
   [ReactJS]: <https://reactjs.org/>
   [ReactDOM]: <https://reactjs.org/>
