# react-exam

We do love __beer__ and we want to make an app to order some :beer: !

To do so we will use the following [API](https://punkapi.com/documentation/v2)

## Rules

- You make use of __React__ or __ReactNative__. State management technology is up to you: Redux, xState (Extra point if you dare to dive into this one), Context ...
- For styling you can choose what you want 🎨
- There are 3 pages (__beer list__, __beer detail__, __beer cart__)

Beer list page:
- Display __all the beers paginated__ with an image, name, volume
- It's possible to __order__ or __remove__ a beer from the cart
- We can see if a beer has been __ordered or not__
- We can navigate to the __beer detail__ and __beer cart__ pages

Beer details page:
- The beer details include the following: image, name, description, volume, ingredients, brewers_tips, and more if you feel the need ;)
- We can see if the beer has been __ordered or not__
- We can navigate to the __beer list__ and __beer cart__ pages

Beer cart page:
- Display a simple list of beers contained in the cart with their image and name
- We can navigate to the __beer detail__ and __beer list__ pages

## Bonus feature

- Use a navigation dependency
- When the page is reloaded, the cart remains filled
- It's possible to __search__ for a beer
- Responsive design (animations)
- Implement __tests__ (you can choose your stack: Storybook, Jest, Cypress, QAWolf, ...)
- Add __linters__
