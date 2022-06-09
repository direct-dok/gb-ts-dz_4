export function booking(e) {
    let jsonData = JSON.parse(e.target.closest('.result').getAttribute('data-info-hotel')),
      storageData = {};

    if(!localStorage.getItem('hotel-' + jsonData.id)) {
        localStorage.setItem('hotel-' + jsonData.id, JSON.stringify(JSON.stringify(jsonData)))
    } else {
        let reserved = JSON.parse(localStorage.getItem('hotel-' + jsonData.id));
        console.log(JSON.parse(reserved))
    }
}