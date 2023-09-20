import homePhoto from './img/headline-home-restaurant-page.png';


export class Home {
  hero = document.createElement('div');
  h2 = document.createElement('h2');
  para = document.createElement('p');
  button = document.createElement('button');

  renderHome() {
    const photo = new Image();
    photo.src = homePhoto;

    this.hero.appendChild(photo);
    this.h2.textContent = 'Just Eat Now!';
    this.para.textContent = 'Chefs love their work at this place and they have been experimenting with a lot of recipes to come up with the best combination to make you say wow.';
    this.button.textContent = 'Contact Us';

    this.h2.classList.add('home');
    this.hero.classList.add('home')

    this.hero.appendChild(this.h2);
    this.hero.appendChild(this.para);
    this.hero.appendChild(this.para);
    this.hero.appendChild(this.button);

    return this.hero;
  };
}
;
