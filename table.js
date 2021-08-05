import "./mock_api.js";
import { mockFetchHelper } from "./mock_api.js";

function sortDate(albums){
    albums.sort((a,b) => {
        const d1 = a.release_date.split("/").join("");
        const d2 = b.release_date.split("/").join("");
        return d1 > d2 ? -1 : d1 == d2 ? 0 : 1
    } )
}

function dataHandler(data){
    //console.log((data));
    const table = document.getElementById("MusicTable");
    sortDate(data.albums)
    for(const album of data.albums){
        console.log(album.album_title)
        const row = table.insertRow();

        const bandcell = row.insertCell();
        const albumcell = row.insertCell();
        const genrecell = row.insertCell();
        const lastplayedcell = row.insertCell();
        const datereleasedcell = row.insertCell();

        bandcell.innerHTML = album.band_name ? album.band_name : "--";
        albumcell.innerHTML = album.album_title ? album.album_title : "--";
        genrecell.innerHTML = album.genres ? album.genres : "--";
        lastplayedcell.innerHTML = album.last_listened ? album.last_listened : "--";
        datereleasedcell.innerHTML = album.release_date ? album.release_date : "--";
        
    }
}
mockFetchHelper(dataHandler);


