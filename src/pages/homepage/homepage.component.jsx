import React from "react";
import Directory from "../../components/directory/directory.component";
import DirectoryNew from "../../components/directory-new/directory-new";
import { HomePageContainer } from "./homepage.styles";
const HomePage = () => (
  <HomePageContainer>
    <DirectoryNew />
    <Directory />
  </HomePageContainer>
);

export default HomePage;
