import axios from "axios"


const handleErrors = (error) => {console.log(error)}

export const getLanguagePopularRepos = (language) => {
    const URI = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
    return axios.get(URI)
        .then(response => response.data.items)
        .catch(handleErrors)
}
