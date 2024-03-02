import project3 from "../../../Assets/isshot.png";
import project2 from "../../../Assets/spotify-clone-app4.jpg";
import project4 from "../../../Assets/dashboard-screenshot2.jpg";
import project6 from "../../../Assets/dashtrackimg.png";
import project7 from "../../../Assets/anonimg.png";

export const ProjectsData = [
  {
    id: "1",
    title: "Dashtrack",
    img: project6,
    info: "A performance monitoring tool that is used to diagose performance issues, and also suggests best ways to fix or prevent them.",
    stacks: ["Typescript", "React Js", "Context API", "Tailwind CSS", "Vite"],
    url: "https://dash-track.vercel.app",
    github: "https://github.com/Racheal-spec/dash-track",
  },
  {
    id: "2",
    title: "Penbuddy",
    img: project7,
    info: "A Blogging community where you can share your stories and thoughts without revealing your identity.",
    stacks: [
      "Typescript",
      "NextJs 14",
      "Context API",
      "Prisma[Postgresql]",
      "CSS Module",
      "react-hook-form",
      "Jose",
      "Cloudinary",
      "Bcrypt",
      "Zod",
      "Figma",
      "JWT",
    ],
    url: "https://penbuddies.vercel.app",
    github: "https://github.com/Racheal-spec/Anon.me",
  },
  {
    id: "3",
    title: "Instamoviesearch",
    img: project3,
    info: "A react movie app built using The Movie DB API. Users can get a list of trending, popular, and top-rated movies. What's more? They can also search for their favorite movies, sign up, and add these movies to their watchlist.",
    stacks: [
      "React Js",
      "Typescript",
      "Supabase",
      "RTK Query",
      "SCSS",
      "Redux",
    ],
    url: "https://instasearchmovie.vercel.app/",
    github: "https://github.com/Racheal-spec/Instasearchmovie",
  },
  {
    id: "4",
    title: "Spotify Clone",
    img: project2,
    info: "This is a front-end clone of the Spotify web player. The UI was modeled after the Spotify desktop app using the Spotify Web API. Users whose Spotify email has been added to this project database can view their playlists and listen to their favorite songs on the Tomi-Spotify clone.",
    stacks: ["React Js", "CSS", "Redux", "Material UI", "Spotify Web API"],
    url: "https://tomi-spotify.vercel.app/",
    github: "https://github.com/Racheal-spec/Tomi-spotify-clone",
  },
  {
    id: "6",
    title: "Paybox Dashboard",
    img: project4,
    info: "Paybox dashboard UI design- built with React Js and SCSS",
    stacks: ["Tech Stack:", "React Js", "SCSS", "Material UI", "Recharts"],
    url: "https://paybox-dashboard.netlify.app/",
    github: "https://github.com/Racheal-spec/PayBox-Dashboard",
  }
];
