## React Web Application - TV Shows
  This is a React web application that fetches TV show data from the TVMaze API and displays it on two endpoints: the listing page and the details page. The application allows users to view a list of TV shows related to "avengers" and access detailed information about each show.

## Installation
  Clone the repository: git clone https://github.com/rana-ji/react-shows.git
  Navigate to the project directory: cd <project-folder>
  Install the dependencies: npm install

## Usage
  Start the development server: npm start
  Open your browser and go to http://localhost:3000/tv-shows/avengers to access the listing page.
  Click on the name of a TV show to view its details at http://localhost:3000/tv-shows/details/{id}. Replace {id} with the ID of the TV show you want to see.
  
## Listing Page
  The listing page fetches a list of TV shows matching the provided search term from the TVMaze API and displays them on the page. The search term is specified as a dynamic value in the URL.

  URL: http://localhost:3000/tv-shows/avengers
  API Endpoint: https://api.tvmaze.com/search/shows?q=avengers
  Each TV show item on the page displays the following information:

  Name of the show
  Language
  Genres
  Runtime
  Premiered date (formatted as 7th Jan, 1961)
  Rating
  Country name
  Thumbnail (medium size)
  
## Details Page
  The details page shows detailed information about a specific TV show. The TV show ID is specified as a dynamic value in the URL.

  URL: http://localhost:3000/tv-shows/details/{id}
  API Endpoint: https://api.tvmaze.com/shows/{id}
  The page fetches the details of the TV show with the specified ID from the TVMaze API and displays the following information:

  Name of the show
  Language
  Genres
  Runtime
  Premiered date (formatted as 7th Jan, 1961)
  Rating
  Country name
  Thumbnail (medium size)

## Summary
  This app contains two app one react app which uses the client-side resndering and another one is next app which uses server-side rendering
  To run the react app : npm start
  To run the next app : npm run dev
