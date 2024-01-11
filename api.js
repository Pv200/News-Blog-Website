 // Function to fetch and display news articles
async function fetchNews() {
    // Replace 'YOUR_API_KEY' with your actual NewsAPI key
    const apiKey = 'fc6b74193b7c4873a41d4dd1f11a8555';
    const apiUrl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=fc6b74193b7c4873a41d4dd1f11a8555';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the request was successful
        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            console.error('Error fetching news:', data.message);
        }
    } catch (error) {
        console.error('Error fetching news:', error.message);
    }
}
function displayNews(articles) {
    const newsListElement = document.getElementById('newsList');

    // Clear previous content
    newsListElement.innerHTML = '';

    // Loop through articles and create cards
    articles.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-4');

        card.innerHTML = `
            <img src="${article.urlToImage}" class="card-img-top" alt="News Image">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
        `;

        newsListElement.appendChild(card);
    });
}

// Call the fetchNews function when the page loads
window.onload = fetchNews;

