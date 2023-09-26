export interface getMoviePopularPerPagePropsType {
  page: number;
}

export interface GetMoviePopularPerPageReturnType {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMoviePopularPerPage = async (
  props: getMoviePopularPerPagePropsType
) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${props.page}`
    );
    return await response.json();
  } catch (error) {}
};

export const getMoviePopularPerPageMock = async (
  props: getMoviePopularPerPagePropsType
): Promise<GetMoviePopularPerPageReturnType> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        page: props.page,
        results: [
          {
            adult: false,
            backdrop_path: '/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg',
            genre_ids: [28, 878, 12],
            id: 565770,
            original_language: 'en',
            original_title: 'Blue Beetle',
            overview:
              'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.',
            popularity: 3868.894,
            poster_path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
            release_date: '2023-08-16',
            title: 'Blue Beetle',
            video: false,
            vote_average: 7.1,
            vote_count: 778,
          },
          {
            adult: false,
            backdrop_path: '/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg',
            genre_ids: [27, 53],
            id: 1008042,
            original_language: 'en',
            original_title: 'Talk to Me',
            overview:
              'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
            popularity: 2836.112,
            poster_path: '/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',
            release_date: '2023-07-26',
            title: 'Talk to Me',
            video: false,
            vote_average: 7.2,
            vote_count: 798,
          },
          {
            adult: false,
            backdrop_path: '/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg',
            genre_ids: [28, 878, 27],
            id: 615656,
            original_language: 'en',
            original_title: 'Meg 2: The Trench',
            overview:
              'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
            popularity: 2837.94,
            poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
            release_date: '2023-08-02',
            title: 'Meg 2: The Trench',
            video: false,
            vote_average: 7,
            vote_count: 1894,
          },
          {
            adult: false,
            backdrop_path: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
            genre_ids: [28, 80, 53],
            id: 385687,
            original_language: 'en',
            original_title: 'Fast X',
            overview:
              "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
            popularity: 2255.179,
            poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
            release_date: '2023-05-17',
            title: 'Fast X',
            video: false,
            vote_average: 7.3,
            vote_count: 3811,
          },
          {
            adult: false,
            backdrop_path: '/53z2fXEKfnNg2uSOPss2unPBGX1.jpg',
            genre_ids: [27, 9648, 53],
            id: 968051,
            original_language: 'en',
            original_title: 'The Nun II',
            overview:
              'In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.',
            popularity: 1934.723,
            poster_path: '/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg',
            release_date: '2023-09-06',
            title: 'The Nun II',
            video: false,
            vote_average: 6.6,
            vote_count: 289,
          },
          {
            adult: false,
            backdrop_path: '/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
            genre_ids: [28, 9648, 53, 80],
            id: 762430,
            original_language: 'en',
            original_title: 'Retribution',
            overview:
              "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
            popularity: 2699.586,
            poster_path: '/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg',
            release_date: '2023-08-23',
            title: 'Retribution',
            video: false,
            vote_average: 6.7,
            vote_count: 185,
          },
          {
            adult: false,
            backdrop_path: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
            genre_ids: [35, 12, 14],
            id: 346698,
            original_language: 'en',
            original_title: 'Barbie',
            overview:
              'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
            popularity: 2173.73,
            poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
            release_date: '2023-07-19',
            title: 'Barbie',
            video: false,
            vote_average: 7.3,
            vote_count: 4923,
          },
          {
            adult: false,
            backdrop_path: '/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg',
            genre_ids: [16, 35, 10751, 14, 10749],
            id: 976573,
            original_language: 'en',
            original_title: 'Elemental',
            overview:
              'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
            popularity: 1284.846,
            poster_path: '/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg',
            release_date: '2023-06-14',
            title: 'Elemental',
            video: false,
            vote_average: 7.8,
            vote_count: 2314,
          },
          {
            adult: false,
            backdrop_path: '/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg',
            genre_ids: [28, 53],
            id: 717930,
            original_language: 'en',
            original_title: 'Kandahar',
            overview:
              'After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.',
            popularity: 1386.625,
            poster_path: '/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg',
            release_date: '2023-05-25',
            title: 'Kandahar',
            video: false,
            vote_average: 6.9,
            vote_count: 537,
          },
          {
            adult: false,
            backdrop_path: '/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg',
            genre_ids: [12, 28],
            id: 335977,
            original_language: 'en',
            original_title: 'Indiana Jones and the Dial of Destiny',
            overview:
              "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
            popularity: 1108.143,
            poster_path: '/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg',
            release_date: '2023-06-28',
            title: 'Indiana Jones and the Dial of Destiny',
            video: false,
            vote_average: 6.7,
            vote_count: 1703,
          },
          {
            adult: false,
            backdrop_path: '/waBWlJlMpyFb7STkFHfFvJKgwww.jpg',
            genre_ids: [28, 18],
            id: 678512,
            original_language: 'en',
            original_title: 'Sound of Freedom',
            overview:
              'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
            popularity: 996.489,
            poster_path: '/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg',
            release_date: '2023-07-03',
            title: 'Sound of Freedom',
            video: false,
            vote_average: 8,
            vote_count: 468,
          },
          {
            adult: false,
            backdrop_path: '/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg',
            genre_ids: [16, 35, 28],
            id: 614930,
            original_language: 'en',
            original_title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
            overview:
              "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
            popularity: 770.729,
            poster_path: '/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg',
            release_date: '2023-07-31',
            title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
            video: false,
            vote_average: 7.3,
            vote_count: 591,
          },
          {
            adult: false,
            backdrop_path: '/iOJX54nVAsnPawagFiWXKv1Y6sB.jpg',
            genre_ids: [16, 12, 10751],
            id: 1076364,
            original_language: 'en',
            original_title: "Carl's Date",
            overview:
              "Carl Fredricksen reluctantly agrees to go on a date with a lady friend—but admittedly has no idea how dating works these days. Ever the helpful friend, Dug steps in to calm Carl's pre-date jitters and offer some tried-and-true tips for making friends—if you're a dog.",
            popularity: 982.738,
            poster_path: '/y8NtM6q3PzntqyNRNw6wgicwRYl.jpg',
            release_date: '2023-06-15',
            title: "Carl's Date",
            video: false,
            vote_average: 7.9,
            vote_count: 152,
          },
          {
            adult: false,
            backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
            genre_ids: [28, 12, 878],
            id: 667538,
            original_language: 'en',
            original_title: 'Transformers: Rise of the Beasts',
            overview:
              'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
            popularity: 918.526,
            poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
            release_date: '2023-06-06',
            title: 'Transformers: Rise of the Beasts',
            video: false,
            vote_average: 7.5,
            vote_count: 3217,
          },
          {
            adult: false,
            backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
            genre_ids: [16, 28, 12],
            id: 569094,
            original_language: 'en',
            original_title: 'Spider-Man: Across the Spider-Verse',
            overview:
              'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
            popularity: 836.618,
            poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
            release_date: '2023-05-31',
            title: 'Spider-Man: Across the Spider-Verse',
            video: false,
            vote_average: 8.5,
            vote_count: 4309,
          },
          {
            adult: false,
            backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
            genre_ids: [28, 12, 878],
            id: 298618,
            original_language: 'en',
            original_title: 'The Flash',
            overview:
              "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
            popularity: 785.846,
            poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
            release_date: '2023-06-13',
            title: 'The Flash',
            video: false,
            vote_average: 6.9,
            vote_count: 2903,
          },
          {
            adult: false,
            backdrop_path: '/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg',
            genre_ids: [10749, 18],
            id: 820525,
            original_language: 'en',
            original_title: 'After Everything',
            overview:
              'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment. Watch Here : https://cineflixs.xyz/movie/820525/after-everything',
            popularity: 665.202,
            poster_path: '/gZLGCibvFY4zmt8sWUZcbBTHRtk.jpg',
            release_date: '2023-09-13',
            title: 'After Everything',
            video: false,
            vote_average: 6.3,
            vote_count: 40,
          },
          {
            adult: false,
            backdrop_path: '/7I6VUdPj6tQECNHdviJkUHD2u89.jpg',
            genre_ids: [28, 53, 80],
            id: 603692,
            original_language: 'en',
            original_title: 'John Wick: Chapter 4',
            overview:
              'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
            popularity: 713.641,
            poster_path: '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
            release_date: '2023-03-22',
            title: 'John Wick: Chapter 4',
            video: false,
            vote_average: 7.8,
            vote_count: 4579,
          },
          {
            adult: false,
            backdrop_path: '/4wVFtesa5YEWuAUHRcxoCN1Y1uN.jpg',
            genre_ids: [28, 53],
            id: 1085218,
            original_language: 'da',
            original_title: 'Underverden 2',
            overview:
              "Seven years ago, Zaid went to war against the Copenhagen underworld to avenge his dead brother. His identity as a respected doctor of cardiology and life as a family man is but a fading dream, and in prison Zaid suffers the loss of his son Noah, whom he barely knows. When a police agent approaches Zaid and offers him a deal to be released in exchange for infiltrating the Copenhagen underworld, he sees his chance to reclaim the remnants of the family life he left behind. But everything has a price, and Zaid realizes that he has now seriously endangered his son's life. After all, once you become part of the underworld, is there any way out?",
            popularity: 575.118,
            poster_path: '/c8B4DsVcFVDLVmbpHMHU3RjLNAV.jpg',
            release_date: '2023-04-13',
            title: 'Darkland: The Return',
            video: false,
            vote_average: 6.6,
            vote_count: 102,
          },
          {
            adult: false,
            backdrop_path: '/AeR5k8Sp3zc2Ql4tT6CmgqspsEq.jpg',
            genre_ids: [12, 10751, 14, 10749],
            id: 447277,
            original_language: 'en',
            original_title: 'The Little Mermaid',
            overview:
              'The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.',
            popularity: 604.363,
            poster_path: '/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
            release_date: '2023-05-18',
            title: 'The Little Mermaid',
            video: false,
            vote_average: 6.5,
            vote_count: 2098,
          },
        ],
        total_pages: 40208,
        total_results: 804154,
      });
    }, 1500);
  });
