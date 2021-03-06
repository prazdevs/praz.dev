---
title: Dark mode in a React app with Context and Styled-components
category: blog
date: 2020-05-22
thumbnail: ../images/react-theme-switch.png
tags: [React]
---

I hate light themes. And I have fairly good reasons to: chronic migraine, eye dryness... And I wish every website offered me the possibility to use a darker theme. They're also pretty convenient when browsing the web in bed at night without going blind (we've all been there, right?). And this is what we're about to do in this post: implement a simple yet effective way to create two distinctive themes for our app and be able to toggle between them by a simple click.

We'll use _styled-components_ for this as it makes dynamic styling really easy. If you're not familiar with it, don't worry, it's a different syntax, but easy to get used to. If you don't like styled-components (and overall CSS-in-JS), I'll try to show you it's worth getting into.

### Creating the app

To get started quickly, we'll use `create-react-app`. So we just run the usual `yarn create react-app theme-switch`. Once the app is ready, let's clean up some things we won't need. We will only keep the `App.js` and the `index.js`. Make sure to also remove any import of deleted files in those two. We should have :

```javascript:title=src/App.js
import React from 'react';

function App() {
  return <div className="App"></div>;
}

export default App;
```

```javascript:title=src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

We will need to add some dependencies :

- styled-components : our trusty CSS-in-JS friend.
- styled-icons : to add some neat icons on our toggle button.
- react-switch : to easily create a theme toggle button.

We just run `yarn add styled-components styled-icons react-switch`.

### Creating a provider using the Context API

We want to pass some theme styling properties to the wholle app and a simple way to have some globally accessible data in React is using _Context_. And we're about to do it.

The _styled-components_ library offers a really useful provider called `ThemeProvider`. This provider accepts a prop called `theme` that will hold all the styling values we want to pass to our components (mostly colors). Changing that `theme` prop will dynamically change every component that has a value coming from the _ThemeProvider_.

Now since we also want to dynamically change that theme with a button, we will need a way to change that theme from anywhere in the app. To do so, we'll just wrap the _ThemeProvider_ from _styled-components_ with our own.

I first create two really simple theme files holding some really simple styling.

```javascript:title=src/themes/light.js
export default {
  colors: {
    background: '#fff',
    text: '#373737',
  },
};
```

```javascript:title=src/themes/dark.js
export default {
  colors: {
    background: '#373737',
    text: '#fff',
  },
};
```

We'll keep it basic for understanding. Now let's create our own custom ThemeProvider.

```javascript:title=src/ThemeProvider.js
import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';

export const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: dark,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

We create a `ThemeContext` that will hold a theme status boolean and a theme toggle function. We use the `useState` hook for clean state management within the context (the deafult theme will be the dark one in this example).

The `toggleTheme` function simply toggles the stored boolean.

Note that imported styled-components' ThemeProvider as `StyledThemeProvider` since the name was already taken by our own component. We wrap that provider with the freshly created one, without forgetting to pass the children. The magic will reside in the state value `dark` changing and passing a different theme to the styled-components provider.

Let's now give access to the theme and toggle function to the rest of our app. We'll wrap our whole application with the provider in the `index.js`.

```javascript:title=index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ThemeProvider from './ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Creating a toggle button

_Toggles are just checkboxes, but fancier._ They are also incredibly annoying to make. Luckily, the React ecosystem got us covered: we will use _react-switch_, a great library to make heavily customizable toggles in a minute. I used _styled-icons_ for the usual sun and moon icons to easily know what that toggle is for.

```javascript:title=src/ThemeToggler.js
import { Moon, Sun } from '@styled-icons/evaicons-solid';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

import { ThemeContext } from './ThemeProvider';

const Icon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SunIcon = styled(Sun)`
  color: #f28c38;
`;

const MoonIcon = styled(Moon)`
  color: #f5f3ce;
`;

const ThemeToggler = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={isDarkTheme}
      handleDiameter={20}
      checkedIcon={
        <Icon>
          <MoonIcon size="20px" />
        </Icon>
      }
      onColor="#191970"
      uncheckedIcon={
        <Icon>
          <SunIcon size="20px" />
        </Icon>
      }
      offColor="#87ceeb"
    />
  );
};

export default ThemeToggler;
```

Besides the fancy CSS-in-JS, the `Switch` component needs two properties:

- `checked` : that holds the toggle state
- `onChange` : a function to be called when its state change

And that's exactly what our _ThemeProvider_ holds. With the help of the `useContext` hook, we grab and pass the required props to the Switch.

### Creating a "themed" component

We will create a simple component that will depend on the theme, using CSS-in-JS.

```javascript:title=src/ThemedTitle.js
import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
`;

const ThemedTitle = ({ children }) => {
  return <H1>{children}</H1>;
};

export default ThemedTitle;
```

By doing this we are creating a styled version of the `h1` tag. We can access the values we stored in our theme files by calling the props as in `${props => props.theme.colors.text}` to get the text color we picked earlier.

If this prop happens to change, the component will react to the change, and adapt its style, convenient isn't it ?

### Wiring it together

Now let's see how our shiny new component reacts to the theme. Let's add both to the App component.

```javascript:title=src/App.js
import React from 'react';

import ThemedTitle from './ThemedTitle';
import ThemeToggler from './ThemeToggler';

function App() {
  return (
    <div className="App">
      <ThemedTitle>Let's build a theme switcher</ThemedTitle>
      <ThemeToggler />
    </div>
  );
}

export default App;
```

You can now click on the toggle, and see what happens. It just switches from one set of style values to the other.

![When the dark theme is on...](../images/dark-theme-on.png)
![...and when it's off!](../images/dark-theme-off.png)

And that's it! Any component built with `styled` will have access to the style properties defined in the theme files and our button can be dropped anywhere in the app, you can even drop more than one!

### On dark themes and accessibility

Now all this code stuff is done, I'd like to emphasize on one thing regarding the dark mode and overall having different themes in our apps. Making a dark theme is not just turning the black texts on white backgrounds to white text on black backgrounds. It also means being able to keep the identity of your app and its colors and translate them to a dark environment. And while doing so, I really encourage you to learn about colors, contrasts and accessibility so that your applications are usable in the best conditions by most people!

I hope this helped you create a dark theme on your app or gave you a nice view of what can be achieved with styled-components.

---

_All this code is availabe on the [GitHub repo](https://github.com/prazdevs/react-theme-switch). If you encounter any issue, or have any question, let me know, I'd be more than happy to help!_
