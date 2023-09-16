import PageUnavailable from '../../components/common/pageUnavailable'
const PageNotFound = () => {
    return (
        <PageUnavailable
            title='404'
            titleExplanation='Page Not Found'
            paragraph='The page you are looking for might have been removed had its name changed or is temporarily unavailable.'
        />
    )
}

export default PageNotFound