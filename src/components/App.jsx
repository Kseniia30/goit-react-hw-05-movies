import { lazy } from 'react';
import LayOut from "pages/Layout";
import { Route, Routes } from "react-router-dom";
import { Container } from "./App.styled";
import HomeMain from "./Home/Home";
import MovieMain from "./Movies/MovieMain";

const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"))
const Cast = lazy(() => import("./MovieDetails/Cast"))
const Reviews = lazy(() => import("./MovieDetails/Reviews"))

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomeMain/>}/>
          <Route path="movies" element={<MovieMain />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast/>} />
              <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};
