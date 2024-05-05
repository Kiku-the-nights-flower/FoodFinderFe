import {Recipe} from "../Interfaces/Recipe";

export function getRecipes() {
    return new Promise<Recipe[]>((resolve, reject) => {
        resolve(
            [{name:"Lamb Rack Frenched Australian",rating:5,ratingAmount:77,description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",image:"http://dummyimage.com/105x128.png/ff4444/ffffff"},
                {name:"Salmon Steak - Cohoe 6 Oz",rating:5,ratingAmount:25,description:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",image:"http://dummyimage.com/144x390.png/dddddd/000000"},
                {name:"Squid - Tubes / Tenticles 10/20",rating:5,ratingAmount:39,description:"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",image:"http://dummyimage.com/186x483.png/dddddd/000000"},
                {name:"Cookies Almond Hazelnut",rating:1,ratingAmount:21,description:"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",image:"http://dummyimage.com/158x287.png/dddddd/000000"},
                {name:"Island Oasis - Peach Daiquiri",rating:3,ratingAmount:87,description:"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",image:"http://dummyimage.com/221x281.png/cc0000/ffffff"},
                {name:"Scallops 60/80 Iqf",rating:2,ratingAmount:0,description:"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",image:"http://dummyimage.com/106x118.png/dddddd/000000"},
                {name:"Cheese - Grana Padano",rating:0,ratingAmount:54,description:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",image:"http://dummyimage.com/148x447.png/ff4444/ffffff"},
                {name:"Carroway Seed",rating:4,ratingAmount:22,description:"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",image:"http://dummyimage.com/147x336.png/5fa2dd/ffffff"},
                {name:"Red Snapper - Fillet, Skin On",rating:4,ratingAmount:79,description:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",image:"http://dummyimage.com/112x279.png/ff4444/ffffff"},
                {name:"Wine - Black Tower Qr",rating:3,ratingAmount:46,description:"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",image:"http://dummyimage.com/244x290.png/cc0000/ffffff"},
                {name:"Bread - Mini Hamburger Bun",rating:5,ratingAmount:5,description:"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",image:"http://dummyimage.com/238x330.png/5fa2dd/ffffff"},
                {name:"Chocolate - White",rating:5,ratingAmount:11,description:"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",image:"http://dummyimage.com/207x183.png/dddddd/000000"},
                {name:"Cheese Cheddar Processed",rating:4,ratingAmount:41,description:"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",image:"http://dummyimage.com/140x341.png/cc0000/ffffff"},
                {name:"Tea - Herbal I Love Lemon",rating:5,ratingAmount:88,description:"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",image:"http://dummyimage.com/149x330.png/ff4444/ffffff"},
                {name:"Sprite, Diet - 355ml",rating:2,ratingAmount:40,description:"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",image:"http://dummyimage.com/239x128.png/cc0000/ffffff"},
                {name:"Beef - Tenderlion, Center Cut",rating:5,ratingAmount:45,description:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",image:"http://dummyimage.com/223x456.png/cc0000/ffffff"},
                {name:"Cilantro / Coriander - Fresh",rating:1,ratingAmount:67,description:"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",image:"http://dummyimage.com/138x494.png/5fa2dd/ffffff"},
                {name:"Bread - Rye",rating:2,ratingAmount:73,description:"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",image:"http://dummyimage.com/215x106.png/5fa2dd/ffffff"},
                {name:"Jam - Apricot",rating:5,ratingAmount:97,description:"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",image:"http://dummyimage.com/236x489.png/cc0000/ffffff"},
                {name:"Tomatoes - Vine Ripe, Red",rating:1,ratingAmount:54,description:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",image:"http://dummyimage.com/104x267.png/ff4444/ffffff"}]);
    });
}