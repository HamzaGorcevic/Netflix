import axios from "axios";

const key = '45fe55a3e541152083e899ef70d8d1cd'

const requests = {Popular:'https://api.themoviedb.org/3/movie/popular?api_key=45fe55a3e541152083e899ef70d8d1cd&language=en-US&page=1',
        TopRated:'https://api.themoviedb.org/3/movie/top_rated?api_key=45fe55a3e541152083e899ef70d8d1cd&language=en-US&page=1',
        Upcoming:'https://api.themoviedb.org/3/movie/upcoming?api_key=45fe55a3e541152083e899ef70d8d1cd&language=en-US&page=1',
        NowPlaying:'https://api.themoviedb.org/3/movie/now_playing?api_key=45fe55a3e541152083e899ef70d8d1cd&language=en-US&page=1'

}

export {requests}