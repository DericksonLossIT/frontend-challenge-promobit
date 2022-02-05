import apiInstance from "../services/api";


export const getPopularMovies = () => {
    apiInstance.get("movie/popular").then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.error(error)
    })
}

