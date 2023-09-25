import homePhoto from './img/headline-home-restaurant-page.png';

export class Home {
  hero = document.createElement('div');
  h2 = document.createElement('h2');
  para = document.createElement('p');
  button = document.createElement('button');

  putChildInsideFamilyTree(
    parent, 
    children
    ) {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  }
  
  renderHome() {
    const photo = new Image();
    photo.src = homePhoto;

    this.hero.appendChild(photo);
    photo.setAttribute(
      'draggable',
      'false'
    );

    this.h2.textContent = 'Lorem Ipsum!';
    this.para.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita dolore sit dignissimos, voluptas distinctio a eligendi beatae rem assumenda ea doloribus maiores adipisci eaque neque, cumque, fugiat facilis reiciendis.';
    this.button.textContent = 'Contact Us';

    this.h2.classList.add('home');
    this.hero.classList.add('home');

    this.putChildInsideFamilyTree(
      this.hero,
      [
        this.h2,
        this.para,
        this.button
      ]
    )

    this.putChildInsideFamilyTree(
      this.hero, 
      [
        this.h2,
        this.para,
        this.button,
      ]
    )

    return this.hero;
  };
};
