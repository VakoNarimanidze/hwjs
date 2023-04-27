
const container = document.createElement('div');
container.classList.add('container');

const h1 = document.createElement('h1');
h1.innerText = 'Blog Title';

const image = document.createElement('img');
image.src = './images/image-1.jpg';
image.alt = 'seaside-picture';

const paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi cupiditate fuga facere facilis autem laborum, ipsum natus veritatis vel nostrum itaque quaerat voluptatem sint doloribus ea assumenda! Ipsam, hic impedit!';


const button = document.createElement('button');
button.innerText = 'read more';


container.appendChild(h1);
container.appendChild(image);
container.appendChild(paragraph);
container.appendChild(button);

document.body.appendChild(container);

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.backgroundColor = 'gray'
container.style.width = '500px'
paragraph.style.width = '250px'