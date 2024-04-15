document.addEventListener('DOMContentLoaded', function () {
    var studentInfo = document.getElementById('student-info');
    var studentData = document.createElement('p');
    studentData.textContent = 'Student ID: 200555994, Name: Muskanpreet Kaur';
    studentInfo.appendChild(studentData);

    // tutorial used: https://www.omdbapi.com/
    
    var apiKey = 'b82d024a'; 
    var apiUrl = 'http://www.omdbapi.com/?apikey=' + apiKey + '&t=The+Matrix'; 
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var movieInfo = document.getElementById('movie-info');
            movieInfo.innerHTML = `
                <h2>${data.Title}</h2>
                <p><strong>Released:</strong> ${data.Released}</p>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
                <img src="${data.Poster}" alt="Movie Poster">
            `;
        })
        .catch(error => console.error('Error fetching movie data:', error));
});
