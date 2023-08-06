const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')
const axios = require('axios');
const yaml = require('js-yaml');


function getGoogleReviews() {
  console.log('=> Fetching reviews data..')
  return new Promise((resolve, reject) => {
    let reviews;
    const url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJS6au6ssZ2jERyc-n--OV4j4&key=AIzaSyAaiF8LlG6Bb9nIr3hL1wMHR9_PY87WNVs';
    axios.get(url)
    .then(res => {
      console.log('=> Reviews data fetched!')
      console.log(res.data)
      if(res.data.status == 'OK') {
        console.log('=> Saving new reviews to markdown..')
        let today = new Date('now');
        reviews = res.data.result.reviews

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
          }
          content = yaml.safeDump(content, {delims: true})
          content = `---\n${content}\n---`
          let path = `./content/testimonials/${slugify(item.author_name)}.md`
          if (!fs.existsSync(path)) {
            fs.writeFile(path, content, err => {
              if (err) {
                console.error(err)
                return
              }
            })
          }
        })
      }
      resolve(reviews)
    })
  })
}