
import { Route, Routes } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages/index"

const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={ <MovieList apiPath="movie/now_playing"  title="Home"/> } />
                <Route path="/movie/:id" element={ <MovieDetail /> } />
                <Route path="/movies/popular" element={ <MovieList  apiPath="movie/popular" title="Popular"/>  } />
                <Route path="/movies/top" element={ <MovieList apiPath="movie/top_rated" title="Top rated"/> } />
                <Route path="/movies/upcoming" element={ <MovieList apiPath="movie/upcoming" title="Upcoming"/> } />
                <Route path="search" element={ <Search apiPath="search/movie" /> } />
                <Route path="*" element={ <PageNotFound  /> } />
            </Routes>
        </div>
    )
}

export default AllRoutes
