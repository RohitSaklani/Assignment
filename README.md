# Assignment

## Functioning

- NavBar contains logo and GetUser button .
- After clicking getUser button , the loader will show untill the data is fetched .
- The fetched data is presented in grid card layout .
- contains a loader imported through react-router-spinner library , shows before fetching the data (hard to see as api response is fast)

## Design

- App contains three components for problem statement ( NavBar , UserCard , UsersData )
- NavBar contains the header part of app .
- App contains all states , which are then passed via props to children
- UsersData is parent of the UserCard and receives data fetched from api via App component .
- UsersData interate over the data and pass every element to UserCard as prop .
- UserCard then displays the user data .
- UsersData diplays data via another component , so if in future there is a state required for each user it can implemented easily (usecases - adding user to a wishlist )
