# MyReads Project

This project was my submission to Udacity's React cross-skilling course. it's a list of books we fetch from an API and show each in it's category. there are 3 categories available, currently reading, want to read and read. there is a search page that shows up to 20 results. the app store the data about books categories/shelves.

## to start
clone the repo then 
install the dependencies with `yarn install` or `npm install`

start dev server with `yarn start` or `npm start`

## API

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [MyReads Project](#myreads-project)
  - [to start](#to-start)
  - [API](#api)
    - [`getAll`](#getall)
    - [`update`](#update)
    - [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
