/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import { BottomNavigation } from '@material-ui/core';

function Footer() {



  return (
    <>
      <BottomNavigation >
        <BottomNavigationAction label="Recents" value="recents" />
        <BottomNavigationAction label="Favorites" value="favorites" />
        <BottomNavigationAction label="Nearby" value="nearby" />
        <BottomNavigationAction label="Folder" value="folder" />
      </BottomNavigation>
    </>
  )
}
export default Footer