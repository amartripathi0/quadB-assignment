import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MoonLoader } from "react-spinners";
import { UserDataContext } from "./Layout";
import Container from "../components/Container";
import Badge from "../components/Badge";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import Button from "../components/Button";

const MovieBookingPage = () => {
  const [movies, setMovies] = useState([]);
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();
  
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    // console.log("newValue:", newValue);
    setValue(newValue);
  };

  function getMovieDetails() {
    // extracting showId form URL
    const browserURl = window.location.href;
    const pathnameParts = browserURl.split("/");
    const showId = pathnameParts[pathnameParts.length - 1];
    // returnig the filtered object on the basis of? showid

    setMovieData(
      movies.filter((movie) => movie?.show?.id === parseInt(showId))[0]
    );
  }

  async function fetchMovies(apiLink: string) {
    const moviesArray = await axios.get(apiLink);
    setMovies(moviesArray.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovies("https://api.tvmaze.com/search/shows?q=all");
  }, []);

  useEffect(() => {
    getMovieDetails();
  }, [movies]);


  return (
    <div className="flex flex-col items-center gap-10 mx-10 my-10">
      {/* top  */}
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
              <span className="font-semibold text-xl">{`${user.username}`}</span>
            </h1>
            <button
              onClick={() => {
                localStorage.removeItem(user.username);
                navigate("/");
                toast.success(`${user.username}, Logged out successfully`, {
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
          Fetching Movie Details....
          <MoonLoader color="rgba(184, 47, 239, 1)" />
        </div>
      ) : (
        <div className=" flex flex-col gap-10 bg-slate-50 w-[95%] rounded-lg p-12 ">
          <Container>
            <div className="flex p-16 transition-all duration-300 gap-16">
              {/* Left Image*/}
              <div className="w-2/5 p-3 hover:shadow-lg  shadow-purple-600">
                <img
                  className="rounded-xl"
                  src={movieData?.show?.image?.original}
                  alt=""
                />
              </div>

              {/* right */}
              <div className="w-3/5 flex flex-col gap-5">
                {/* top 1st coloumn*/}
                <div className=" flex justify-between w-full">
                  <div className="flex items-center  gap-4">
                    <span className="text-2xl font-medium">Movie Name: </span>{" "}
                    <h1 className=" text-3xl font-semibold">
                      {" "}
                      {movieData?.show?.name}
                    </h1>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="text-xl">Language:</span>
                    <Badge
                      extrastyles="text-2xl font-medium"
                      label={movieData?.show?.language}
                    />
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="text-xl">Rating:</span>

                    {movieData?.show?.rating.average !== null ? (
                      <Badge
                        extrastyles="text-2xl font-medium"
                        label={`${movieData?.show?.rating.average}⭐/10`}
                      />
                    ) : (
                      <Badge extrastyles="text-2xl" label={`Rating: N.A`} />
                    )}
                  </div>
                </div>

                {/* top 2nd coloumn */}
                <div className="flex justify-between w-full">
                  <div className="flex gap-2 items-center">
                    <span className="text-xl">Status:</span>
                    <Badge
                      extrastyles="text-2xl font-medium"
                      label={movieData?.show?.status}
                    />
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="text-xl">Type:</span>
                    <Badge
                      extrastyles="text-2xl font-medium"
                      label={movieData?.show?.type}
                    />
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="text-xl">Runtime:</span>
                    <Badge
                      extrastyles="text-2xl font-medium"
                      label={movieData?.show?.runtime}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-xl">Average Runtime:</span>
                    <Badge
                      extrastyles="text-2xl font-medium"
                      label={movieData?.show?.averageRuntime}
                    />
                  </div>

                  {/* <div className="flex text-lg gap-3 items-center">
                    <h2>Generes: </h2>
                    <div className="flex items-center gap-2 text-2xl">
                        {movieData?.show?.genres.map((genere) => (
                        <span key={genere} className="font-medium"> • {genere}</span>
                        ))}
                    </div>
                    </div> */}
                </div>

                <div className="flex gap-8 text-lg">
                  <h1>
                    Premierd on:{" "}
                    <span className="font-medium text-2xl">
                      {movieData?.show?.premiered !== null
                        ? movieData?.show?.premiered
                        : "N.A"}
                    </span>
                  </h1>
                  <h1>
                    Ended on:{" "}
                    <span className="font-medium text-2xl">
                      {movieData?.show?.ended !== null
                        ? movieData?.show?.ended
                        : "N.A"}
                    </span>
                  </h1>
                </div>
                {/* top 4thrd coloum for sumary */}
                <div>
                  <span className="text-xl">Summary: </span>
                  <p
                    className="text-xl text-justify"
                    dangerouslySetInnerHTML={{
                      __html: movieData?.show?.summary,
                    }}
                  ></p>
                </div>
                {/* bottom form*/}

                  <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="border-2 rounded-lg w-3/4 px-5 flex flex-col gap-3">
                  <h1 className="text-2xl p-3">Show Ticket Booking Form</h1>

                    <div className="mb-6">
                      <label
                        htmlFor="Username"
                        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                     
                      <input
                        type="text"
                        disabled
                        value={user.username}
                        name="username"
                        id="username"
                        className="block w-full p-4 rounded-xl text-gray-900 border border-gray-300  bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                 </div>

                {/* calender */}
                    <div className="flex flex-col gap-3">
                      <h1 className="text-lg font-medium">Choose a date:</h1>
                      <Datepicker asSingle = {true} value={value} onChange={handleValueChange} />
                    </div>

                {/* button */}

                    <div className="my-4">
                    
                    <button onClick={() => {
                        toast.success(`Hurray🎉 ${user.username}, You're all set! Ticket booked for ${value.startDate.toLocaleString()}.`)
                    }}
                        className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="text-lg relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Book your ticket now
                        </span>
                    </button>
                    
                    </div>

                    
                </div>
                  </form>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default MovieBookingPage;
