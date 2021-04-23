# Riley Butterfield Teachable Frontend Take Home

## My Tech Stack

For this assignment, I used primarily React and Redux on the front end. While I utilized localStorage to ensure persistent Saved Gems after refreshes, I also used Redux to maintain application state, including the state of saved and unsaved gems. Additionally, I used Materialize CSS to create a clean user interface.

## Requirements

### 1. _It have a search box that lets users search for Ruby Gems._

I implemented a search bar using a React component that's `query` state updates on any change within the search bar. When the user presses enter or the search button, it triggers a dispatch action to the Redux store. There, the string that was entered into the search bar is encoded and used in an axios get requesst to the provided API endpoint. The response from the API then becomes the new application `result` state that can be used by other components.

### 2. _It should display the results of the search in a list._

Within the `Main` component, `result` is checked for length. If there is no length (no results), the component conditionally renders a helpful message. If there is length, and thus results, the result array is mapped over. Within the map function, each gem is checked against localStorage to determine whether its button should allow a user to save or unsave the gem. Finally, the map method renders a `SingleGem` component for each result and passes the details of the result as a prop.

### 3. _Each Gem should have a button that lets users "save" and "unsave" Gems._

This button is rendered conditionally within the SingleGem component, where there is a check to see whether the gem is in either localStorage or in the `savedGems` array in global state (depending on render location). If it is saved, the button displays an "unsave" option and a click triggers a dispatch to the Redux store, where the gem is removed from localStorage as well as the global `savedGems` state. If the gem is not already saved, the user is presented with a "save" button that triggers a dispatch to the Redux store, where the gem is saved to localStorage and added to a copied version of `savedGems` state.

### 4. _It should have a way to view saved Gems, even after the browser window is refreshed (localStorage is a fine for this)._

Users can use the nav bar to navigate to a "Saved Gems" page, where the saved gems are retrieved from localStorage via Redux on componentDidMount. Then, the saved gems are once again mapped over, where each gem in the array renders a `SingleGem` component, passing down details as props.

## With More Time

If I had more time to work on this assignment, I would be interested in utilizing pagination for both the search results as well as saved gems (when necessary). Additionally, I would explore optimization options within localStorage, whether that might mean storing smaller versions of the result strings, or possibly storing a single saved key-value pair, where additional saved gems are appended to the list. I would also be interested in writing tests to ensure that my code runs as expected and that component rendering is consistent on re-renders. Finally, the sky is the limit in terms of what can be done with design, and I'd love to get even more creative with creating a beautiful and effective UI :)

---

# Assignment Instructions Below

# Teachable frontend takehome

If you're reading this, you're likely a candidate for a frontend job at Teachable. You're going to be building a search application that takes a user's search query, hits the [Ruby Gems](https://rubygems.org/) search API endpoint, and displays the results in a list view with some added functionality (detailed below).

The application, once completed, should meet the following criteria:

1. It have a search box that lets users search for Ruby Gems.
2. It should display the results of the search in a list.
3. Each Gem should have a button that lets users "save" and "unsave" Gems.
4. It should have a way to view saved Gems, even after the browser window is refreshed (localStorage is a fine for this).

Here's a few things we'll look for in our evaluation.

1. Clean, well-organized code.
2. Sensisble architecture choices that could scale well.
3. A clean, functioning UI.
4. Bonus points if you write tests.

## Getting started

### Step 1: Fork this repo and clone it

### Step 2: Install dependencies

We have a few dependencies necessary to run the build and proxy server, the rest are up to you.

```bash
npm install
```

### Step 3: Start the development server

```bash
npm run dev
```

### Step 4: Start coding

We want to review your ability to program UIs, not configure build tools. That's why we chose [Parcel](https://parceljs.org/) as a bundler, please consult the [documentation](https://parceljs.org/getting_started.html) if you run into any trouble.

We added a CSS file as an example, feel free to delete that.

### Step 5: Network requests

You may have noticed the server.js file at the root of this application, that's there to solve cross-origin issues when making network requests. The server automatically starts up when running "npm run dev" or "npm run start".

To see a sample request in action, run the following in your command line.

```bash
curl http://localhost:3000/api/v1/search.json?query=rails
```
