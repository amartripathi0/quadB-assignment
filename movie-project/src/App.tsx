// import React from "react";
import Container from "./components/Container";
import MovieCard from "./components/MovieCard";

const App = () => {
  const movie = [
    {
      score: 0.7024896,
      show: {
        id: 42181,
        url: "https://www.tvmaze.com/shows/42181/all-rise",
        name: "All Rise",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Legal"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2019-09-23",
        ended: "2023-11-18",
        officialSite: "https://www.oprah.com/sp/all-rise.html",
        schedule: {
          time: "21:00",
          days: ["Saturday"],
        },
        rating: {
          average: 6.7,
        },
        weight: 97,
        network: {
          id: 236,
          name: "Oprah Winfrey Network",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 363841,
          imdb: "tt10329042",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg",
        },
        summary:
          "<p><b>All Rise</b> is a courthouse drama that follows the chaotic, hopeful and sometimes absurd lives of its judges, prosecutors and public defenders, as they work with bailiffs, clerks and cops to get justice for the people of Los Angeles amidst a flawed legal process. Among them is newly appointed Judge Lola Carmichael, a highly regarded and impressive deputy district attorney who doesn't intend to sit back on the bench in her new role, but instead leans in, immediately pushing the boundaries and challenging the expectations of what a judge can be.</p>",
        updated: 1700686554,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/42181",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/2320801",
          },
        },
      },
    },
    {
      score: 0.7018503,
      show: {
        id: 34653,
        url: "https://www.tvmaze.com/shows/34653/all-american",
        name: "All American",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Sports"],
        status: "Running",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2018-10-10",
        ended: null,
        officialSite: "http://www.cwtv.com/shows/all-american/",
        schedule: {
          time: "20:00",
          days: ["Monday"],
        },
        rating: {
          average: 6.1,
        },
        weight: 94,
        network: {
          id: 5,
          name: "The CW",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.cwtv.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 348200,
          imdb: "tt7414406",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg",
        },
        summary:
          "<p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>",
        updated: 1689588083,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/34653",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/2530954",
          },
        },
      },
    },
    {
      score: 0.693707,
      show: {
        id: 42312,
        url: "https://www.tvmaze.com/shows/42312/all-that",
        name: "All That",
        type: "Variety",
        language: "English",
        genres: ["Comedy", "Children", "Music"],
        status: "Ended",
        runtime: 30,
        averageRuntime: 30,
        premiered: "2019-06-15",
        ended: "2020-12-17",
        officialSite: "https://www.nick.com/shows/all-that",
        schedule: {
          time: "21:00",
          days: ["Saturday"],
        },
        rating: {
          average: 6,
        },
        weight: 77,
        network: {
          id: 27,
          name: "Nickelodeon",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.nick.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: null,
          imdb: "tt10309492",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/494/1235114.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/494/1235114.jpg",
        },
        summary:
          "<p>The new kids of comedy bring the funny as <b>All That</b>, America's #1 kid's sketch comedy show, returns with a new cast and a few familiar faces. From Executive Producers Kenan Thompson and Kel Mitchell.</p>",
        updated: 1702838271,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/42312",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1969275",
          },
        },
      },
    },
    {
      score: 0.691996,
      show: {
        id: 6305,
        url: "https://www.tvmaze.com/shows/6305/all-that",
        name: "All That",
        type: "Variety",
        language: "English",
        genres: ["Comedy"],
        status: "Ended",
        runtime: 25,
        averageRuntime: 25,
        premiered: "1994-12-24",
        ended: "2005-10-22",
        officialSite: null,
        schedule: {
          time: "21:00",
          days: ["Saturday"],
        },
        rating: {
          average: null,
        },
        weight: 79,
        network: {
          id: 27,
          name: "Nickelodeon",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.nick.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 75208,
          imdb: "tt0111875",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/494/1235113.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/494/1235113.jpg",
        },
        summary:
          "<p><b>All That</b> is an American live-action, sketch comedy-variety show that aired on the Nickelodeon cable television network featuring short comedic sketches and weekly musical guests. ork.</p>",
        updated: 1704793728,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/6305",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1268569",
          },
        },
      },
    },
    {
      score: 0.68992656,
      show: {
        id: 65759,
        url: "https://www.tvmaze.com/shows/65759/all-stars",
        name: "All Stars",
        type: "Scripted",
        language: "English",
        genres: ["Comedy"],
        status: "In Development",
        runtime: null,
        averageRuntime: null,
        premiered: null,
        ended: null,
        officialSite: null,
        schedule: {
          time: "",
          days: [],
        },
        rating: {
          average: null,
        },
        weight: 71,
        network: null,
        webChannel: {
          id: 3,
          name: "Prime Video",
          country: null,
          officialSite: "https://www.primevideo.com",
        },
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 429742,
          imdb: "tt24460308",
        },
        image: null,
        summary:
          "<p><b>All Stars</b> follows a former cheerleader from Daytona Beach who cons her way across the pond to teach cheerleading at a school in coastal England and has to show a ragtag group of students – and herself – how to be All Stars.</p>",
        updated: 1704306696,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/65759",
          },
        },
      },
    },
    {
      score: 0.68850696,
      show: {
        id: 32110,
        url: "https://www.tvmaze.com/shows/32110/all-souls",
        name: "All Souls",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Horror"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2001-04-17",
        ended: "2001-08-31",
        officialSite: null,
        schedule: {
          time: "21:00",
          days: ["Friday"],
        },
        rating: {
          average: null,
        },
        weight: 72,
        network: {
          id: 70,
          name: "UPN",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 248561,
          imdb: "tt0280229",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/128/321026.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/128/321026.jpg",
        },
        summary:
          "<p>In a haunted Boston hospital called <b>All Souls </b>Hospital, Dr. Mitchell Grace's tries to find out the truth about the hauntings that dated as far back as the civil war. All Souls Hospital's lower levels used to be a mental asylum, and are haunted by ghosts of dead patients. The ghosts notably include Lazarus, an orderly who has been benevolently haunting the hospital since his days working with Dr. Ambrosius after the Civil War.</p>",
        updated: 1652621440,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/32110",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1311156",
          },
        },
      },
    },
    {
      score: 0.67081606,
      show: {
        id: 9526,
        url: "https://www.tvmaze.com/shows/9526/all-saints",
        name: "All Saints",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Medical"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "1998-02-24",
        ended: "2009-10-27",
        officialSite: null,
        schedule: {
          time: "20:30",
          days: ["Tuesday"],
        },
        rating: {
          average: 7.2,
        },
        weight: 71,
        network: {
          id: 251,
          name: "Seven Network",
          country: {
            name: "Australia",
            code: "AU",
            timezone: "Australia/Sydney",
          },
          officialSite: "https://7plus.com.au/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 71815,
          imdb: "tt0163924",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/408/1022051.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/408/1022051.jpg",
        },
        summary:
          '<p><b>All Saints</b> follows the lives of the staff at All Saints Western General Hospital. Until its closure in 2004, the show primarily focused on the staff in Ward 17. Known as the "garbage ward" as it took all the overflow from the other wards.</p>',
        updated: 1704793677,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/9526",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/512065",
          },
        },
      },
    },
    {
      score: 0.6693662,
      show: {
        id: 31428,
        url: "https://www.tvmaze.com/shows/31428/all-night",
        name: "All Night",
        type: "Scripted",
        language: "English",
        genres: ["Comedy"],
        status: "Ended",
        runtime: null,
        averageRuntime: 23,
        premiered: "2018-05-11",
        ended: "2018-05-11",
        officialSite: "https://www.hulu.com/all-night",
        schedule: {
          time: "",
          days: [],
        },
        rating: {
          average: 7.4,
        },
        weight: 47,
        network: null,
        webChannel: {
          id: 2,
          name: "Hulu",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.hulu.com/",
        },
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 346001,
          imdb: "tt7292950",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg",
        },
        summary:
          '<p>After their graduation, the class of 2018 gathers to celebrate their last night together at their local rec center for "Grad Night," an all-night party with dancing, karaoke, games—and a rule that no one can come in or out for twelve full hours. For most the night signals their last chance to accomplish some high school dream: Nerdy Cody wants to make his mark on the school, and popular Roni wants to finally lose her virginity to her boyfriend Oz. Valedictorian Melinda plans to sneakily sell alcohol to her classmates at the party to pay her tuition, and every-girl Deanna gets ready to finally admit her feelings for her best friend Fig, who only has eyes for Roni. As the night goes on, the kids\' quests overlap, intertwine, and -in some cases- implode. What would you do with your last night in high school?</p>',
        updated: 1651425957,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/31428",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1461722",
          },
        },
      },
    },
    {
      score: 0.66205835,
      show: {
        id: 8600,
        url: "https://www.tvmaze.com/shows/8600/all-access",
        name: "All Access",
        type: "Documentary",
        language: "English",
        genres: ["Sports"],
        status: "Running",
        runtime: 30,
        averageRuntime: 30,
        premiered: "2012-06-13",
        ended: null,
        officialSite: "http://www.sho.com/sho/all-access/home",
        schedule: {
          time: "21:30",
          days: ["Friday"],
        },
        rating: {
          average: null,
        },
        weight: 41,
        network: {
          id: 9,
          name: "Showtime",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.sho.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 269888,
          imdb: null,
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/494/1235111.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/494/1235111.jpg",
        },
        summary:
          "<p><b>All Access</b> is an exclusive Showtime TV documentary series of 30-minute specials that chronicles the lives of athletes in unarmed combat sports.</p>",
        updated: 1702838118,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/8600",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/2686287",
          },
        },
      },
    },
    {
      score: 0.659271,
      show: {
        id: 19227,
        url: "https://www.tvmaze.com/shows/19227/all-out",
        name: "All Out!!",
        type: "Animation",
        language: "Japanese",
        genres: ["Drama", "Anime", "Sports"],
        status: "Ended",
        runtime: 25,
        averageRuntime: 25,
        premiered: "2016-10-06",
        ended: "2017-03-30",
        officialSite: "http://allout-anime.com",
        schedule: {
          time: "00:00",
          days: ["Thursday"],
        },
        rating: {
          average: null,
        },
        weight: 39,
        network: {
          id: 132,
          name: "Tokyo MX",
          country: {
            name: "Japan",
            code: "JP",
            timezone: "Asia/Tokyo",
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 308030,
          imdb: "tt6738600",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/67/168214.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/67/168214.jpg",
        },
        summary:
          "<p>In rugby, there is no ace striker, there is no number four batter, so who is the star of the team?</p><p>The story begins at school entrance ceremony of Kanagawa High School where Kenji Gion, a small but gutsy go-getter joins the rugby club. He joins with his classmate, Iwashimizu, who has a complicated past and sub-captain Hachiouji, who always takes good care of his Club members. Lastly, there is Captain Sekizan, who has overwhelming powers but keeps his cards close to his chest. With such differences in both personality and physical performance, the team must learn to work and grow together so they can become the best.</p>",
        updated: 1704795450,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/19227",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1096369",
          },
        },
      },
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10 mx-10 my-10">
      <Container extraStyles="w-4/5 py-4 ">
        <div
          className="flex justify-center items-center w-1/3 m-auto h-20   border-2 border-purple-300 rounded-xl 
          hover:shadow-lg shadow-purple-600 transition-all duration-400
          "
        >
          <h1 className="text-4xl font-medium  ">Movie Booking System</h1>
        </div>
      </Container>

      <div 
      className= " flex flex-col gap-10 bg-slate-50 w-[95%] rounded-lg p-12" 
      >
        {movie.map((eachMovie) => (
          
          <Container extraStyles="w-full">

            <MovieCard
              rating={eachMovie.show.rating.average}
              language={eachMovie.show.language}
              movieImageLink={eachMovie.show.image?.medium}
              movieName={eachMovie.show.name}
              type={eachMovie.show.type}
              runtime={eachMovie.show.runtime}
              premired={eachMovie.show.premiered}
              ended={eachMovie.show.ended}
              linkToWatch={eachMovie.show.url}
              summary={eachMovie.show.summary}
              generes={eachMovie.show.genres}
            />
          </Container>
         
        ))}
      </div>
    </div>
  );
};

export default App;
