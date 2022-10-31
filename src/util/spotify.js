const clientId = 'd94f8c93713d4cbab5215b17af97d0a5';
const redirectUri = "http://localhost:3000/";  
let getUserAccessToken;
const Spotify = {
    getAccessToken()
    {
        if(getUserAccessToken)
        {
            return getUserAccessToken;
        }       

        // check for access token match:
        const accessTokenMatch =  window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch =  window.location.href.match(/expires_in=([^&]*)/);
        
        if(accessTokenMatch && expiresInMatch)
        {
            getUserAccessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // this clears the parameters, allowing us to grab a new access token when it expires.
            window.setTimeout(
                () => {getUserAccessToken=''}, expiresIn * 1000
            )
            window.history.pushState('Access Token', null, '/');
            return getUserAccessToken;
        }
        else 
        {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    }, 
    
    search(term)
    {
        const accessToken = Spotify.getAccessToken();
        return fetch(  // sent the request using the fetch method
            `https://api.spotify.com/v1/search?type=track&q=${term}`, 
            {
                headers : {Authorization: `Bearer ${accessToken}`}
            }
        ).then( // convert the response to json
            (response) => { return response.json()}
        ).then(
            (jsonResponse) => {
                if(!jsonResponse.tracks)
                {
                    return [];
                }

                return jsonResponse.tracks.items.map(
                    (track) => {
                        return {
                            id: track.id, 
                            name : track.name,
                            artist: track.artists[0].name, 
                            album: track.album.name, 
                            uri: track.uri
                        }
                    }
                );
            }
        )
    }, 

    savePlaylist(name, trackUris)
    {
        if(!name || !trackUris.length)
        {
            return;
        }   
        const accessToken =Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`} ;
    }
};


export default Spotify;