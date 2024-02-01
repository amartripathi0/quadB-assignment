import { Outlet } from "react-router-dom";
import Container from "../components/Container";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-10 mx-10 my-10">
      <Container extrastyles="w-4/5 py-4 ">
        <div
          className="flex justify-center items-center w-1/3 m-auto h-20   border-2 border-purple-300 rounded-xl 
          hover:shadow-lg shadow-purple-600 transition-all duration-400
          "
        >
          <h1 className="text-4xl font-medium  ">Movie Booking System</h1>
        </div>
      </Container>

      <div className="flex bg-slate  mx-20 p-10 gap-10">
        <Container extrastyles="w-1/2 p-10 text-xl flex flex-col gap-10 text-justify">
          <div>
            <h1 className="font-semibold text-2xl">About Project Assignment</h1>
            Welcome to our innovative Movie Booking System, where the magic of
            cinema meets a user-friendly digital experience. Discover a curated
            list of movies, each offering a captivating cinematic journey.
            Seamlessly navigate through the collection, explore detailed movie
            information, and effortlessly book or watch your favorite films with
            just a few clicks. Experience the future of movie booking at your
            fingertips!
            <br /> <br />
            <span className=" font-semibold">Tools: </span> Vite-React ,
            react-router-dom, Axios, Tailwindcss, TypeScript, vercel deployment
            etc
          </div>

          <div>
            <h1 className="font-semibold text-2xl">About Me</h1>
            Hey!! I'm <span className="font-medium">Amar Tripathi,</span> my
            passion lies in UI/UX optimization using ReactJS, Tailwind CSS, and
            Redux Toolkit.In addition to my strong frontend skills, I also
            possess backend knowledge in NodeJS, REST APIs, MongoDB, TypeScript,
            ExpressJS, and Git. This holistic understanding gives me a valuable
            perspective on the entire development process.
          </div>
        </Container>

        <Container extrastyles="w-1/2  flex-center text-lg">
          <form
            className="w-2/3"
            action=""
            onSubmit={(e) => e.preventDefault()}
          >
            <Outlet />
          </form>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
