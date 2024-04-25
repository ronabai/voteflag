const mongoose = require('mongoose');
const Flag = require('./models/flag'); // Flag modelinin yolu ve dosyası

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB bağlantısı başarılı.");

        // Bayrak verileri
        const flagsData = [            
           
           
                 {  country: "Afghanistan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg",
                    voteCount: 0
                },
                 {
                    country: "Albania",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
                    voteCount: 0
                },
                {
                    country: "Algeria",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
                    voteCount: 0
                },
                {
                    country: "Andorra",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
                    voteCount: 0
                },
                {
                    country: "Angola",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
                    voteCount: 0
                },
                {
                    country: "Antigua and Barbuda",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
                    voteCount: 0
                },
                {
                    country: "Argentina",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
                    voteCount: 0
                },
                {
                    country: "Armenia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
                    voteCount: 0
                },
                {
                    country: "Australia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
                    voteCount: 0
                },
                {
                    country: "Austria",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
                    voteCount: 0
                },
                {
                    country: "Azerbaijan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
                    voteCount: 0
                },
                {
                    country: "Bahamas",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
                    voteCount: 0
                },
                {
                    country: "Bahrain",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
                    voteCount: 0
                },
                {
                    country: "Bangladesh",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
                    voteCount: 0
                },
                {
                    country: "Barbados",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
                    voteCount: 0
                },
                {
                    country: "Belarus",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
                    voteCount: 0
                },
                {
                    country: "Belgium",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
                    voteCount: 0
                },
                {
                    country: "Belize",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
                    voteCount: 0
                },
                {
                    country: "Benin",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
                    voteCount: 0
                },
                {
                    country: "Bhutan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
                    voteCount: 0
                },
                {
                    country: "Bolivia (Plurinational State of)",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg",
                    voteCount: 0
                },
                {
                    country: "Bosnia and Herzegovina",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
                    voteCount: 0
                },
                {
                    country: "Botswana",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
                    voteCount: 0
                },
                {
                    country: "Brazil",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
                    voteCount: 0
                },
                {
                    country: "Brunei Darussalam",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
                    voteCount: 0
                },
                {
                    country: "Bulgaria",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
                    voteCount: 0
                },
                {
                    country: "Burkina Faso",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg",
                    voteCount: 0
                },
                {
                    country: "Burundi",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
                    voteCount: 0
                },
                {
                    country: "Cabo Verde",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg",
                    voteCount: 0
                },
                {
                    country: "Cambodia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
                    voteCount: 0
                },
                {
                    country: "Cameroon",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
                    voteCount: 0
                },
                {
                    country: "Canada",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
                    voteCount: 0
                },
                {
                    country: "Central African Republic",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg",
                    voteCount: 0
                },
                {
                    country: "Chad",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",
                    voteCount: 0
                },
                {
                    country: "Chile",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
                    voteCount: 0
                },
                {
                    country: "China",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
                    voteCount: 0
                },
                {
                    country: "Colombia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
                    voteCount: 0
                },
                {
                    country: "Comoros",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg",
                    voteCount: 0
                },
                {
                    country: "Congo",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",
                    voteCount: 0
                },
                {
                    country: "Costa Rica",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg",
                    voteCount: 0
                },
                {
                    country: "Croatia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
                    voteCount: 0
                },
                {
                    country: "Cuba",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",
                    voteCount: 0
                },
                {
                    country: "Cyprus",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
                    voteCount: 0
                },
                {
                    country: "Czech Republic",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
                    voteCount: 0
                },
                {
                    country: "Denmark",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
                    voteCount: 0
                },
                {
                    country: "Djibouti",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
                    voteCount: 0
                },
                {
                    country: "Dominica",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",
                    voteCount: 0
                },
                {
                    country: "Dominican Republic",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",
                    voteCount: 0
                },
                {
                    country: "Ecuador",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
                    voteCount: 0
                },
                {
                    country: "Egypt",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
                    voteCount: 0
                },
                {
                    country: "El Salvador",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
                    voteCount: 0
                },
                {
                    country: "Equatorial Guinea",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",
                    voteCount: 0
                },
                {
                    country: "Eritrea",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",
                    voteCount: 0
                },
                {
                    country: "Estonia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
                    voteCount: 0
                },
                {
                    country: "Eswatini",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg",
                    voteCount: 0
                },
                {
                    country: "Ethiopia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
                    voteCount: 0
                },
                {
                    country: "Fiji",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",
                    voteCount: 0
                },
                {
                    country: "Finland",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
                    voteCount: 0
                },
                {
                    country: "France",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
                    voteCount: 0
                },
                {
                    country: "Gabon",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg",
                    voteCount: 0
                },
                {
                    country: "Gambia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg",
                    voteCount: 0
                },
                {
                    country: "Georgia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
                    voteCount: 0
                },
                {
                    country: "Germany",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
                    voteCount: 0
                },
                {
                    country: "Ghana",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
                    voteCount: 0
                },
                {
                    country: "Greece",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
                    voteCount: 0
                },
                {
                    country: "Grenada",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
                    voteCount: 0
                },
                {
                    country: "Guatemala",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
                    voteCount: 0
                },
                {
                    country: "Guinea",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
                    voteCount: 0
                },
                {
                    country: "Guinea-Bissau",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
                    voteCount: 0
                },
                {
                    country: "Guyana",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
                    voteCount: 0
                },
                {
                    country: "Haiti",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
                    voteCount: 0
                },
                {
                    country: "Honduras",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",
                    voteCount: 0
                },
                {
                    country: "Hungary",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
                    voteCount: 0
                },
                {
                    country: "Iceland",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
                    voteCount: 0
                },
                {
                    country: "India",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
                    voteCount: 0
                },
                {
                    country: "Indonesia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
                    voteCount: 0
                },
                {
                    country: "Iran (Islamic Republic of)",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
                    voteCount: 0
                },
                {
                    country: "Iraq",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
                    voteCount: 0
                },
                {
                    country: "Ireland",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
                    voteCount: 0
                },
                {
                    country: "Israel",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
                    voteCount: 0
                },
                {
                    country: "Italy",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
                    voteCount: 0
                },
                {
                    country: "Jamaica",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
                    voteCount: 0
                },
                {
                    country: "Japan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
                    voteCount: 0
                },
                {
                    country: "Jordan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
                    voteCount: 0
                },
                {
                    country: "Kazakhstan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
                    voteCount: 0
                },
                {
                    country: "Kenya",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
                    voteCount: 0
                },
                {
                    country: "Kiribati",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg",
                    voteCount: 0
                },
                {
                    country: "Kuwait",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
                    voteCount: 0
                },
                {
                    country: "Kyrgyzstan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
                    voteCount: 0
                },
                {
                    country: "Lao People's Democratic Republic",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
                    voteCount: 0
                },
                {
                    country: "Latvia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
                    voteCount: 0
                },
                {
                    country: "Lebanon",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
                    voteCount: 0
                },
                {
                    country: "Lesotho",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
                    voteCount: 0
                },
                {
                    country: "Liberia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
                    voteCount: 0
                },
                {
                    country: "Libya",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",
                    voteCount: 0
                },
                {
                    country: "Liechtenstein",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
                    voteCount: 0
                },
                {
                    country: "Lithuania",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
                    voteCount: 0
                },
                {
                    country: "Luxembourg",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
                    voteCount: 0
                },
                {
                    country: "Madagascar",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
                    voteCount: 0
                },
                {
                    country: "Malawi",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg",
                    voteCount: 0
                },
                {
                    country: "Malaysia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
                    voteCount: 0
                },
                {
                    country: "Maldives",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",
                    voteCount: 0
                },
                {
                    country: "Mali",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
                    voteCount: 0
                },
                {
                    country: "Malta",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
                    voteCount: 0
                },
                {
                    country: "Marshall Islands",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
                    voteCount: 0
                },
                {
                    country: "Mauritania",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
                    voteCount: 0
                },
                {
                    country: "Mauritius",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
                    voteCount: 0
                },
                {
                    country: "Mexico",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
                    voteCount: 0
                },
                {
                    country: "Micronesia (Federated States of)",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg",
                    voteCount: 0
                },
                {
                    country: "Monaco",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
                    voteCount: 0
                },
                {
                    country: "Mongolia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
                    voteCount: 0
                },
                {
                    country: "Montenegro",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
                    voteCount: 0
                },
                {
                    country: "Morocco",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
                    voteCount: 0
                },
                {
                    country: "Mozambique",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
                    voteCount: 0
                },
                {
                    country: "Myanmar",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
                    voteCount: 0
                },
                {
                    country: "Namibia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
                    voteCount: 0
                },
                {
                    country: "Nauru",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
                    voteCount: 0
                },
                {
                    country: "Nepal",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
                    voteCount: 0
                },
                {
                    country: "Netherlands",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
                    voteCount: 0
                },
                {
                    country: "New Zealand",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
                    voteCount: 0
                },
                {
                    country: "Nicaragua",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
                    voteCount: 0
                },
                {
                    country: "Niger",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg",
                    voteCount: 0
                },
                {
                    country: "Nigeria",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
                    voteCount: 0
                },
                {
                    country: "North Macedonia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg",
                    voteCount: 0
                },
                {
                    country: "Norway",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
                    voteCount: 0
                },
                {
                    country: "Oman",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
                    voteCount: 0
                },
                {
                    country: "Pakistan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
                    voteCount: 0
                },
                {
                    country: "Palau",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
                    voteCount: 0
                },
                {
                    country: "Panama",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
                    voteCount: 0
                },
                {
                    country: "Papua New Guinea",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",
                    voteCount: 0
                },
                {
                    country: "Paraguay",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
                    voteCount: 0
                },
                {
                    country: "Peru",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
                    voteCount: 0
                },
                {
                    country: "Philippines",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
                    voteCount: 0
                },
                {
                    country: "Poland",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
                    voteCount: 0
                },
                {
                    country: "Portugal",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
                    voteCount: 0
                },
                {
                    country: "Qatar",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
                    voteCount: 0
                },
                {
                    country: "Republic of Korea",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
                    voteCount: 0
                },
                {
                    country: "Republic of Moldova",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
                    voteCount: 0
                },
                {
                    country: "Romania",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
                    voteCount: 0
                },
                {
                    country: "Russian Federation",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
                    voteCount: 0
                },
                {
                    country: "Rwanda",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
                    voteCount: 0
                },
                {
                    country: "Saint Kitts and Nevis",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg",
                    voteCount: 0
                },
                {
                    country: "Saint Lucia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
                    voteCount: 0
                },
                {
                    country: "Saint Vincent and the Grenadines",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
                    voteCount: 0
                },
                {
                    country: "Samoa",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
                    voteCount: 0
                },
                {
                    country: "San Marino",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
                    voteCount: 0
                },
                {
                    country: "Sao Tome and Principe",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg",
                    voteCount: 0
                },
                {
                    country: "Saudi Arabia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
                    voteCount: 0
                },
                {
                    country: "Senegal",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
                    voteCount: 0
                },
                {
                    country: "Serbia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
                    voteCount: 0
                },
                {
                    country: "Seychelles",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg",
                    voteCount: 0
                },
                {
                    country: "Sierra Leone",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",
                    voteCount: 0
                },
                {
                    country: "Singapore",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
                    voteCount: 0
                },
                {
                    country: "Slovakia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
                    voteCount: 0
                },
                {
                    country: "Slovenia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
                    voteCount: 0
                },
                {
                    country: "Solomon Islands",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg",
                    voteCount: 0
                },
                {
                    country: "Somalia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
                    voteCount: 0
                },
                {
                    country: "South Africa",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
                    voteCount: 0
                },
                {
                    country: "South Sudan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg",
                    voteCount: 0
                },
                {
                    country: "Spain",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
                    voteCount: 0
                },
                {
                    country: "Sri Lanka",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
                    voteCount: 0
                },
                {
                    country: "Sudan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
                    voteCount: 0
                },
                {
                    country: "Suriname",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
                    voteCount: 0
                },
                {
                    country: "Sweden",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
                    voteCount: 0
                },
                {
                    country: "Switzerland",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
                    voteCount: 0
                },
                {
                    country: "Syrian Arab Republic",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
                    voteCount: 0
                },
                {
                    country: "Tajikistan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
                    voteCount: 0
                },
                {
                    country: "Thailand",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
                    voteCount: 0
                },
                {
                    country: "Timor-Leste",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg",
                    voteCount: 0
                },
                {
                    country: "Togo",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",
                    voteCount: 0
                },
                {
                    country: "Tonga",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",
                    voteCount: 0
                },
                {
                    country: "Trinidad and Tobago",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
                    voteCount: 0
                },
                {
                    country: "Tunisia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
                    voteCount: 0
                },
                {
                    country: "Turkey",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
                    voteCount: 0
                },
                {
                    country: "Turkmenistan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
                    voteCount: 0
                },
                {
                    country: "Tuvalu",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
                    voteCount: 0
                },
                {
                    country: "Uganda",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
                    voteCount: 0
                },
                {
                    country: "Ukraine",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
                    voteCount: 0
                },
                {
                    country: "United Arab Emirates",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
                    voteCount: 0
                },
                {
                    country: "United Kingdom of Great Britain and Northern Ireland",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
                    voteCount: 0
                },
                {
                    country: "United Republic of Tanzania",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",
                    voteCount: 0
                },
                {
                    country: "United States of America",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
                    voteCount: 0
                },
                {
                    country: "Uruguay",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
                    voteCount: 0
                },
                {
                    country: "Uzbekistan",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
                    voteCount: 0
                },
                {
                    country: "Vanuatu",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg",
                    voteCount: 0
                },
                {
                    country: "Venezuela (Bolivarian Republic of)",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_Venezuela_%28state%29.svg",
                    voteCount: 0
                },
                {
                    country: "Viet Nam",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
                    voteCount: 0
                },
                {
                    country: "Yemen",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
                    voteCount: 0
                },
                {
                    country: "Zambia",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
                    voteCount: 0
                },
                {
                    country: "Zimbabwe",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
                    voteCount: 0
                }
            ]
            
        // Bayrak verilerini MongoDB'ye yükleme
        Flag.insertMany(flagsData)
            .then(() => console.log("Bayrak verileri başarıyla MongoDB'ye yüklendi."))
            .catch(err => console.error("Bayrak verileri MongoDB'ye yüklenirken hata oluştu:", err))
            .finally(() => mongoose.disconnect()); // Bağlantıyı kapat
    })
    .catch((err) => {
        console.error("MongoDB bağlantısı hatası:", err);
    });
