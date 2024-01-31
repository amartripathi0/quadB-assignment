import React from "react";
import Badge from "./Badge";
import Button from "./Button";

const MovieCard = ({
  children,
  extraStyles,
  rating,
  generes,
  movieImageLink,
  movieName,
  language,
  runtime,
  type,
  linkToWatch,
  premired,
  ended,
  summary,
}: {
  children?: React.ReactNode;
  extraStyles?: string;
  rating: number | null;
  generes: string[];
  movieName: string;
  language: string;
  runtime: number | null;
  type: string;
  linkToWatch: string;
  premired: string | null;
  ended: string | null;
  summary: string;
  movieImageLink: string | undefined;
}) => {
  return (
    <div
      className={`${extraStyles} 
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
          </div>
        </div>

        <div className="flex gap-8 text-lg">
          <h1>
            Premierd on:{" "}
            <span className="font-semibold">
              {premired !== null ? premired : "N.A"}
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
              <span className="font-medium"> • {genere}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
