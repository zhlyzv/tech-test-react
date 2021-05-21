# React tech test

## Tasks

Using a Javascript Framework of your choice (Preferably React) or regular native Javascript, please carry out the following tasks:

1. ~~Consume the good endpoint and display a list of the results on-screen.~~
2. ~~Display the results in capitals without using CSS transforms.~~
3. ~~Add search functionality to the UI that uses the search endpoint instead.~~
4. Take the error endpoint and display the error message it returns. **Not too sure what the expectation is here? **Not sure if it makes sense to always display an error message? I'm only displaying this if there is an error with either of the /ancients.json or /ancients.json?search endpoints.**
5. ~~If the search term called a second time then fetch it from a local JS cache rather than hitting the network.~~ Using [SWR](https://swr.vercel.app/) for data fetching. This adds easy caching as well so when the same search query is called again, no new request is fired.

## Comments

Didn't quite have the time to add as many tests as I would have liked, this is definitely something to improve. ``src/components/AncientList/index`` is a bit of a beast, it would be a good idea to be split even further to allow easier testing. Ran into some issues in terms of mocking responses which is why I didn't do so.

There is a bug where if we clear the search query, initial data is displayed as expected, however upon entering the first character of a new search query, the previous search result is displayed due to the new query not being submitted yet. We could either check if the currently stored searchData is relevant or instead run the search onChange of the input field(concerns around performance there).

## Structure

Used create-react-app to scaffold initial app.
Using [styled-components](https://styled-components.com/) for styling.
Using [SWR](https://swr.vercel.app/) for data fetching.

- The majority of the logic in this app is contained in ``src/components/AncientsList`` dir
- ui components for form etc are in ``src/componentns/ui``

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
