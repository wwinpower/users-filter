import React from 'react';
import UserList from "./components/UserList/UserList";
import classes from "./App.module.css";
const App = () => {
    return (
        <div className={classes.App}>
            <UserList />
        </div>
    );
};

export default App;