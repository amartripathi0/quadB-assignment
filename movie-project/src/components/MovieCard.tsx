import Badge from "./Badge";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  extrastyles,
  rating,
  generes,
  movieImageLink,
  movieName,
  language,
  runtime,
  type,
  linkToWatch,
  premiered,
  ended,
  summary,
  showId,
}: {
  extrastyles?: string;
  rating: number | null;
  generes: string[];
  movieName: string;
  language: string;
  runtime: number | null;
  type: string;
  linkToWatch: string;
  premiered: string | null;
  ended: string | null;
  summary: string;
  movieImageLink: string | undefined;
  showId: number;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${extrastyles} 
    flex-center p-6 gap-10 w-full 
    `}
    >
      {/* Left side - Image and (rating , Genre) */}
      <div className=" flex flex-col items-center border p-2 px-3 hover:shadow-md shadow-grey w-[15%]">
        {/* left top */}
        <img
          src={movieImageLink}
          alt={movieName}
          className="h-72 rounded-md "
        />

        {/* left bottom */}
        <div className="flex-between font-medium mt-3  w-full">
          {rating !== null ? (
            <Badge label={`${rating}⭐/10`} />
          ) : (
            <Badge label={`Rating: N.A`} />
          )}
          <Badge label={language} />
        </div>
      </div>

      {/* right  */}
      <div className="flex flex-col gap-4 w-4/5">
        {/* right - top */}
        <div className="flex-between  ">
          <div className="flex items-center gap-3">
            <h1 className="headline">{movieName}</h1>
            <Badge label={type} />
            <Badge label={`${runtime}min`} />
          </div>

          <div>
            <Button label="Watch it" watchLink={linkToWatch} />
            <span
              onClick={() => {
                navigate(`movie-ticket-booking/${showId}`);
              }}
              className=" cursor-pointer  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="text-lg  relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Book a ticket
              </span>
            </span>
          </div>
        </div>

          <div className="flex gap-8 text-lg">
            <h1>
              Premiered on:{" "}
              <span className="font-semibold">
                {premiered !== null ? premiered : "N.A"}
              </span>
            </h1>
            <h1>
              Ended on:{" "}
              <span className="font-semibold">
                {ended !== null ? ended : "N.A"}
              </span>
            </h1>
          </div>
        {/* right center */}

        <div className="flex w-4/5">
          <p
            className="text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></p>
        </div>

        {/* right bottom */}

        <div className="flex text-lg gap-3">
          <h2>Generes: </h2>
          <div className="flex items-center gap-2">
            {generes.map((genere) => (
              <span key = {genere} className="font-medium"> • {genere}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
