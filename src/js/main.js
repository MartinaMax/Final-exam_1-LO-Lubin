// Import all plugins
import 'bootstrap';
import * as Popper from "@popperjs/core";

const baseUrl = 'https://mmaximova.dk/wp-json/wp/v2/posts'

let token;
fetch('https://mmaximova.dk/wp-json/jwt-auth/v1/token',{
    method: 'POST',
    headers: {
        'Content-type':'application/json'
    },
    body: JSON.stringify({
        "username": "Admin",
        "password": "YellowCarrotAdmin"
    })
})

.then(response => response.json())
.then(data => {
    token = data.data.token;
})

.then(() => {
    fetch(`${baseUrl}?status=private&categories=3&per_page=40`, {
        method:'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {

        const splitArray = (data, size) => {
            let result = [];
            for (let i = 0; i < data.length; i += size) {
              let part = data.slice(i, i + size);
              result.push(part);
            }
            return result;
          };
          
          const size = 10;
          const chunks = splitArray(data, size);
          
          console.log(chunks);

            const staffPage1 = chunks[0].map(
                chunks =>
                    `<li class="d-grid staff-grid">
                        <img src="${chunks.acf.staff_image.url}"alt="${chunks.acf.staff_image.alt}" class="img-150"/>
                        <div class="align-self-center full-width">
                            <h2 class="heading-golden h2-golden-underline">${chunks.acf.staff_name}</h2>
                            <h4 class="heading-white">${chunks.acf.staff_position}</h4>
                        </div>
                    </li>`
            )

            document.getElementById('staff-page-1').innerHTML = staffPage1;
             
            const staffPage2 = chunks[1].map(
                chunks =>
                    `<li class="d-grid staff-grid">
                        <img src="${chunks.acf.staff_image.url}"alt="${chunks.acf.staff_image.alt}" class="img-150"/>
                        <div class="align-self-center full-width">
                            <h2 class="heading-golden h2-golden-underline">${chunks.acf.staff_name}</h2>
                            <h4 class="heading-white">${chunks.acf.staff_position}</h4>
                        </div>
                    </li>`
            )

            document.getElementById('staff-page-2').innerHTML = staffPage2;

            const staffPage3 = chunks[2].map(
                chunks =>
                    `<li class="d-grid staff-grid">
                        <img src="${chunks.acf.staff_image.url}"alt="${chunks.acf.staff_image.alt}" class="img-150"/>
                        <div class="align-self-center full-width">
                            <h2 class="heading-golden h2-golden-underline">${chunks.acf.staff_name}</h2>
                            <h4 class="heading-white">${chunks.acf.staff_position}</h4>
                        </div>
                    </li>`
            )

            document.getElementById('staff-page-3').innerHTML = staffPage3;

            const staffPage4 = chunks[3].map(
                chunks =>
                    `<li class="d-grid staff-grid">
                        <img src="${chunks.acf.staff_image.url}"alt="${chunks.acf.staff_image.alt}" class="img-150"/>
                        <div class="align-self-center full-width">
                            <h2 class="heading-golden h2-golden-underline">${chunks.acf.staff_name}</h2>
                            <h4 class="heading-white">${chunks.acf.staff_position}</h4>
                        </div>
                    </li>`
            )

            document.getElementById('staff-page-4').innerHTML = staffPage4;
    })
})

// Refrences 
// https://jsfiddle.net/vhyxbr3r/