
import { Route, Routes } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages/index"

const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={ <MovieList apiPath="movie/now_playing" /> } />
                <Route path="/movie/:id" element={ <MovieDetail /> } />
                <Route path="/movies/popular" element={ <MovieList  apiPath="movie/popular"/> } />
                <Route path="/movies/top" element={ <MovieList apiPath="movie/top_rated" /> } />
                <Route path="/movies/upcoming" element={ <MovieList apiPath="movie/upcoming" /> } />
                <Route path="search" element={ <Search /> } />
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </div>
    )
}

export default AllRoutes
