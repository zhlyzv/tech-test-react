# React tech test

## Tasks

Using a Javascript Framework of your choice (Preferably React) or regular native Javascript, please carry out the following tasks:

1. ~~Consume the good endpoint and display a list of the results on-screen.~~
2. ~~Display the results in capitals without using CSS transforms.~~
3. ~~Add search functionality to the UI that uses the search endpoint instead.~~
4. Take the error endpoint and display the error message it returns. **Not too sure what the expectation is here? **Not sure if it makes sense to always display an error message? I'm only displaying this if there is an error with either of the /ancients.json or /ancients.json?search endpoints.**
5. ~~If the search term called a second time then fetch it from a local JS cache rather than hitting the network.~~ Using [SWR](https://swr.vercel.app/) for data fetching. This adds easy caching as well so when the same search query is called again, no new request is fired.
## Install dependencies

```bash
npm install
```

## Run app

```bash
npm start
```

## Package for Production

```bash
npm run build
```
