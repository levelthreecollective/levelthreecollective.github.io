image_list = [
    "loud/1.jpg",
    "loud/2.jpg",
    "loud/3.jpg",
    "loud/4.jpg",
    "loud/5.jpg",
    "loud/6.jpg",
    "loud/7.jpg", 
    "loud/8.jpg", 
    "loud/9.jpg", 
    "loud/10.jpg",
    "loud/11.jpg", 
    "loud/12.jpg",
    "loud/13.jpg",
    "ludlow/1.jpg",
    "ludlow/2.jpg",
    "ludlow/3.jpg",
    "ludlow/4.jpg",
    "ludlow/5.jpg",
    "ludlow/6.jpg",
    "ludlow/7.jpg", 
    "ludlow/8.jpg", 
    "ludlow/9.jpg", 
    "ludlow/10.jpg",
    "ludlow/11.jpg", 
    "ludlow/12.jpg", 
    "ludlow/13.jpg",
    "garage/1.jpg",
    "garage/2.jpg",
    "garage/3.jpg",
    "garage/4.jpg",
    "garage/5.jpg",
    "garage/6.jpg",
    "garage/7.jpg", 
    "garage/8.jpg", 
    "garage/9.jpg", 
    "garage/10.jpg",
    "convocation/1.jpg",
    "convocation/2.jpg",
    "convocation/3.jpg",
    "convocation/4.jpg",
    "convocation/5.jpg",
    "convocation/6.jpg",
    "convocation/7.jpg",
]

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const randomItem = getRandomItem(image_list);
const randomImagePath = '../events/gallery/' + randomItem;