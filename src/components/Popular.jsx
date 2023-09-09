
import { useEffect, useState } from "react"
import { getLanguagePopularRepos } from "./api"


import Repo from "./Repo"
import Repos from "./Repos"

const languages = ['all', 'javascript', 'python', 'java', 'c', 'go']


const Popular = () => {

    const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0)
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(false)

    const [repos, setRepos] = useState([])

    useEffect(() => {
        setLoading(true)
        getLanguagePopularRepos(languages[selectedLanguageIndex])
            .then(
                repos => setRepos(repos)
            )
            .catch(
                error => setError(error)
            )
            .finally(
                () => setLoading(false)
            )
    }, [selectedLanguageIndex])


    if (loading) {
        return <p>Loading ...</p>
    }

    return (
        <>
        <div >
            <ul className="languages">
                {
                    languages.map(
                        (language, index) => (
                            <li
                                key={index}
                                style={{ color:  index === selectedLanguageIndex ? '#d0021b': '#000000'}}
                                onClick={() => setSelectedLanguageIndex(index)}
                            >{language}</li>
                        )
                    )
                }
            </ul>
            <Repos repos={repos} />
        </div>
        </>
    )
}

export default Popular;
