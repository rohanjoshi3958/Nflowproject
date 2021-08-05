export function mockFetchHelper(
    handler,
    URL = "albums.json"
) 
{
    return( 
        fetch(URL).then(response => {
            return response.json();
        })
        .then(data => {
            handler(data)
        })
        .catch(error => {
            return(error)
        })
    )
}




