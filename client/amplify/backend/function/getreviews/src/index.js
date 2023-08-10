const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        // Fetch Google reviews using the Google Places API
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS; // Use the environment variable for your API key
        const placeId = 'YOUR_FIXED_PLACE_ID'; // Replace with your actual fixed place ID
        
        const response = await fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJS6au6ssZ2jERyc-n--OV4j4&key=AIzaSyAaiF8LlG6Bb9nIr3hL1wMHR9_PY87WNVs");
        const data = await response.json();
        
        const reviews = data.result.reviews || [];
        
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Enable CORS for all domains
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(reviews),
        };
    } catch (error) {
        console.error("Error fetching Google reviews:", error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*", // Enable CORS for all domains
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({ error: "Internal server error" }),
        };
    }
};
