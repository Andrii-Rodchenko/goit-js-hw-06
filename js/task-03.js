const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  },
];


const ref = {
  gallery: document.querySelector( ".gallery")
}

const createGalleryItem = (img) => {
  return `  
     <li class = "gallery__img" ><img src = ${img.url} alt = ${img.alt} width = 600px>
     </li>
   `
}

const gallery = images.map((img) => createGalleryItem(img))
console.log("🚀 ~ file: task-03.js ~ line 29 ~ gallery ", gallery)


ref.gallery.insertAdjacentHTML("afterbegin", gallery.join(" ") )

