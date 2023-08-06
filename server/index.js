const fs = require('fs');
// const klaw = require('klaw');
// const path = require('path');
const matter = require('gray-matter');
const axios = require('axios');
const yaml = require('js-yaml');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

const GOOGLE_MAPS_API_KEY = 'AIzaSyAaiF8LlG6Bb9nIr3hL1wMHR9_PY87WNVs';
// API endpoint to get the Google Maps API key
app.get('/api/google-maps-api-key', (req, res) => {
  res.json({ apiKey: GOOGLE_MAPS_API_KEY });

});

function getGoogleReviews() {
  // console.log('=> Fetching reviews data..');
  return new Promise((resolve, reject) => {
    let reviews;
    const url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJS6au6ssZ2jERyc-n--OV4j4&key=AIzaSyAaiF8LlG6Bb9nIr3hL1wMHR9_PY87WNVs';
    axios.get(url)
    .then(res => {
      // console.log("res.data");
      // console.log(res.data);

      if (res.data.status == 'OK') {
        // console.log('=> Saving new reviews to markdown..');
        let today = new Date('now');
        reviews = res.data.result.reviews;
        // console.log(reviews);
        // Converting reviews to netlify format
        reviews.forEach(item => {
          let content = {
            image: item.profile_photo_url,
            title: item.author_name,
            link: '',
            company: '',
            testimonial: item.text,
            rating: item.rating,
            promted: false,
            google: true,
          };
          content = yaml.dump(content, { delims: true });
          content = `---\n${content}\n---`;
          let filePath = `./content/testimonials/${slugify(item.author_name)}.md`;
          if (!fs.existsSync(filePath)) {
            fs.writeFile(filePath, content, err => {
              if (err) {
                console.error(err);
                return;
              }
            });
          }
        });
      }
      resolve(reviews);
    });
  });
}

getGoogleReviews();

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}


// API endpoint to get reviews data
app.get('/api/reviews', (req, res) => {
    getGoogleReviews()
      .then(reviews => {
        res.json(reviews);
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  });
  
  // Start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });