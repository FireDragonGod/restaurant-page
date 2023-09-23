import logo from './img/logo.svg';

export class Header {
  head = document.createElement('header');
  h1 = document.createElement('h1');
  img = document.createElement('img');
  nav = document.createElement('nav');
  ul = document.createElement('ul');
  li1 = document.createElement('li');
  li2 = document.createElement('li');
  li3 = document.createElement('li');
  a1 = document.createElement('a');
  a2 = document.createElement('a');
  a3 = document.createElement('a');
  
  putChildInsideFamilyTree(parent, children) {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  }

  renderHeader() {
    const icon = new Image();
    icon.src = logo;

    this.head.classList.add('header');
    this.h1.textContent = 'Breakfast Cafe';
    this.a1.textContent = 'Home';
    this.a2.textContent = 'Menu';
    this.a3.textContent = 'Contact';
    this.a1.setAttribute('id', 'home');
    this.a2.setAttribute('id', 'menu');
    this.a3.setAttribute('id', 'contact');
    icon.setAttribute('width', '60');

    this.putChildInsideFamilyTree(this.head, [
      this.h1,
      this.nav,
    ]);

    this.putChildInsideFamilyTree(this.h1, [icon]);
    this.putChildInsideFamilyTree(this.nav, [this.ul]);
    this.putChildInsideFamilyTree(
      this.ul, 
      [
        this.li1,
        this.li2,
        this.li3
      ]);

    this.li1.appendChild(this.a1);
    this.li2.appendChild(this.a2);
    this.li3.appendChild(this.a3);

    
    return this.head;
  };
};
