# Welcome to Halo 5 API React App

In this app you will find basic features of a student's first time building a react application

Features include:

### `JSON Data`

This app features JSON Data manipulation using data from an array that has information about different factions within the Halo 5 game.

### `Array.map() & Array.filter()`

To manipulate this data, the use of .map and .filter is used to get the correct data into specific components based upon faction.

```javascript
let halo = haloJSON.filter((obj) => obj.faction === "Covenant");
```

### `Array.map() for mapping over lists and displaying the JSX`

The code below demonstrates how `.map()` was used within each of the components to create lists of data from the incoming JSON.

```javascript
let haloCovenant = halo.map((enemy) => {
    return (
        <div key={enemy.id} className="card">
            <h2>{enemy.name}</h2>
            <img src={enemy.largeIconImageUrl} alt="alien"></img>
        </div>
    )
  })
```

This data was then used by adding it to the `return()` statement in the component.


```javascript
return (
    <div className="covenant">
      {haloCovenant}
    </div>
  );
```

### `Inline Styles`

Inline styles are used in the UNSC component since this component was different in the fact that this faction in the JSON only had one data point. This made it so 
that the styles provided on each of the other components was not working well with this particular one. Using inline styling was the answer.

```javascript
const style = {
            width: '300px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto'
        }

        const cardStyle = {
            display: 'flex',
            flexDirection: 'column'
        } 
```

### Where to find this app hosted online:

You can find this app hosted by Netlify by [Clicking Here](https://initial-react-app-halo-5-api.netlify.app).


# React Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
