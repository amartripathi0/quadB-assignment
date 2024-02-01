// import React from "react";
import Container from "./components/Container";
import MovieCard from "./components/MovieCard";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "./pages/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MoonLoader } from "react-spinners";
import axios from "axios";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user} = useContext(UserDataContext);
  const navigate = useNavigate();

  async function fetchMovies(apiLink) {
    const moviesData = await axios.get(apiLink);
    setMovies(moviesData.data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchMovies("https://api.tvmaze.com/search/shows?q=all");
  }, []);
  return (
    <div className="flex flex-col items-center gap-10 mx-10 my-10">
      <Container extrastyles="w-4/5 py-4 ">
        <div
          className="flex-between px-10 gap-10 w-2/3 m-auto h-20   border-2 border-purple-300 rounded-xl 
          hover:shadow-lg shadow-purple-600 transition-all duration-400
          "
        >
          <h1 className="text-4xl font-medium  ">Movie Booking System</h1>

          <div className=" flex-center gap-5">
            <h1>
              Welcome,{" "}
              <span className="font-semibold text-xl">{`${user?.username}`}</span>
            </h1>
            <button
              onClick={() => {
                localStorage.removeItem(user?.username);
                navigate("/");
                toast.success(`${user?.username}, Logged out successfully`, {
                  position: "top-right",
                });
              }}
              className="p-2 px-3 border-2 font-medium hover:bg-slate-100 rounded-xl"
            >
              Logout
            </button>
          </div>
        </div>
      </Container>

      {isLoading ? (
        <div className="w-screen h-screen flex-center">
          Fetching Movies....
          <MoonLoader color="rgba(184, 47, 239, 1)" />
        </div>
      ) : (
        <div className=" flex flex-col gap-10 bg-slate-50 w-[95%] rounded-lg p-12">
          {movies.map((eachMovie) => (
            <Container extrastyles="w-full" key={eachMovie?.show.id}>
              <MovieCard
                rating={eachMovie?.show.rating.average}
                language={eachMovie.show?.language}
                movieImageLink={eachMovie?.show.image?.medium}
                movieName={eachMovie?.show.name}
                type={eachMovie?.show.type}
                runtime={eachMovie?.show.runtime}
                premiered={eachMovie?.show.premiered}
                ended={eachMovie?.show.ended}
                linkToWatch={eachMovie?.show.url}
                summary={eachMovie?.show.summary}
                generes={eachMovie?.show.genres}
                showId={eachMovie?.show.id}
              />
            </Container>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
