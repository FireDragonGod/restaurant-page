import lugaw from './img/lugaw-headline-menu-restaurant-page.jpg';
import beefPares from './img/headline-home-restaurant-page.png';
import mamiSopao from './img/mami-headline-contact-restaurant-page.jpg';
import champorado from './img/champo.jpg';
import ensayMada from './img/ensaymada.jpg';
import pandesal from './img/pandesal.jpg';
import bibingka from './img/bibingka.jpg';
import taho from './img/taho.jpg'


export class Menu {
  menu = document.createElement('div');
  h2AndImgWrapper = document.createElement('div');
  h2 = document.createElement('h2');
  ul = document.createElement('ul');
  li1 = document.createElement('li');
  li2 = document.createElement('li');
  li3 = document.createElement('li');
  li4 = document.createElement('li');
  li5 = document.createElement('li');
  li6 = document.createElement('li');
  li7 = document.createElement('li');
  li8 = document.createElement('li');
  div1 = document.createElement('div');
  div2 = document.createElement('div');
  div3 = document.createElement('div');
  div4 = document.createElement('div');
  div5 = document.createElement('div');
  div6 = document.createElement('div');
  div7 = document.createElement('div');
  div8 = document.createElement('div');
  h31 = document.createElement('h3');
  h32 = document.createElement('h3');
  h33 = document.createElement('h3');
  h34 = document.createElement('h3');
  h35 = document.createElement('h3');
  h36 = document.createElement('h3');
  h37 = document.createElement('h3');
  h38 = document.createElement('h3');
  para1 = document.createElement('p');
  para2 = document.createElement('p');
  para3 = document.createElement('p');
  para4 = document.createElement('p');
  para5 = document.createElement('p');
  para6 = document.createElement('p');
  para7 = document.createElement('p');
  para8 = document.createElement('p');
  span1 = document.createElement('span');
  span2 = document.createElement('span');
  span3 = document.createElement('span');
  span4 = document.createElement('span');
  span5 = document.createElement('span');
  span6 = document.createElement('span');
  span7 = document.createElement('span');
  span8 = document.createElement('span');

  renderMenu() {
    this.h2.textContent = 'Menu';

    const orderLugaw = new Image();
    const beef = new Image();
    const mami = new Image();
    const champo = new Image();
    const ensaymada = new Image();
    const pande = new Image();
    const bibing = new Image();
    const tahoo = new Image();

    beef.src = beefPares;
    orderLugaw.src = lugaw;
    mami.src = mamiSopao;
    champo.src = champorado;
    ensaymada.src = ensayMada;
    pande.src = pandesal;
    bibing.src = bibingka;
    tahoo.src = taho;

    this.h31.textContent = 'Lugaw';
    this.h32.textContent = 'Beef Pares';
    this.h33.textContent = 'Mami Soipao';
    this.h34.textContent = 'Champorado';
    this.h35.textContent = 'Ensaymada';
    this.h36.textContent = 'Ube Pandesal';
    this.h37.textContent = 'Bibingka';
    this.h38.textContent = 'Taho';

    this.para1.textContent = 'Rice porridge made with boiled glutinous rice seasoned with garlic, ginger, and salt';
    this.para2.textContent = 'Braised beef stew with fried rice and beef stock';
    this.para3.textContent = 'Filipino-Chinese dish, Noodles made with white wheat flour noodles with chicken, beef, or pork. Bun is best when eaten warm.';
    this.para4.textContent = 'Chocolate rice porridge with milk on top';
    this.para5.textContent = 'Butter and topped with buttercream, sugar, and grated cheese, typically queso de bola.';
    this.para6.textContent = 'Ube flavored pandesal wheat flour'
    this.para7.textContent = 'Glutinous rice with coconut milk.';
    this.para8.textContent = 'simple syrup';

    this.span1.textContent = '$2.00';
    this.span2.textContent = '$1.40';
    this.span3.textContent = '$2.40';
    this.span4.textContent = '$1.00';
    this.span5.textContent = '$1.00';
    this.span6.textContent = '$0.5';
    this.span7.textContent = '$0.5';
    this.span8.textContent = '$0.4';

    this.div1.classList.add('lugaw');
    this.div2.classList.add('beef-pares');
    this.div3.classList.add('mami-siopao');
    this.div4.classList.add('champorado');
    this.div5.classList.add('ensaymada');
    this.div6.classList.add('pandesal');
    this.div7.classList.add('bibingka');
    this.div8.classList.add('taho');
    this.h2.classList.add('menu-h2');
    this.menu.classList.add('menu')

    this.menu.appendChild(this.h2AndImgWrapper);
    this.h2AndImgWrapper.appendChild(this.h2);
    this.menu.appendChild(this.ul);
    this.ul.appendChild(this.li1);
    this.ul.appendChild(this.li2);
    this.ul.appendChild(this.li3);
    this.ul.appendChild(this.li4);
    this.ul.appendChild(this.li5);
    this.ul.appendChild(this.li6);
    this.ul.appendChild(this.li7);
    this.ul.appendChild(this.li8)
    this.li1.appendChild(this.div1);
    this.li2.appendChild(this.div2);
    this.li3.appendChild(this.div3);
    this.li4.appendChild(this.div4);
    this.li5.appendChild(this.div5);
    this.li6.appendChild(this.div6);
    this.li7.appendChild(this.div7);
    this.li8.appendChild(this.div8);

    this.div1.appendChild(orderLugaw);
    this.div2.appendChild(beef);
    this.div3.appendChild(mami);
    this.div4.appendChild(champo);
    this.div5.appendChild(ensaymada);
    this.div6.appendChild(pande);
    this.div7.appendChild(bibing);
    this.div8.appendChild(tahoo);

    this.div1.appendChild(this.h31);
    this.div2.appendChild(this.h32);
    this.div3.appendChild(this.h33);
    this.div4.appendChild(this.h34);
    this.div5.appendChild(this.h35);
    this.div6.appendChild(this.h36);
    this.div7.appendChild(this.h37);
    this.div8.appendChild(this.h38);
    this.div1.appendChild(this.para1);
    this.div2.appendChild(this.para2);
    this.div3.appendChild(this.para3);
    this.div4.appendChild(this.para4);
    this.div5.appendChild(this.para5);
    this.div6.appendChild(this.para6);
    this.div7.appendChild(this.para7);
    this.div8.appendChild(this.para8);
    this.div1.appendChild(this.span1);
    this.div2.appendChild(this.span2);
    this.div3.appendChild(this.span3);
    this.div4.appendChild(this.span4);
    this.div5.appendChild(this.span5);
    this.div6.appendChild(this.span6);
    this.div7.appendChild(this.span7);
    this.div8.appendChild(this.span8);

    return this.menu;
  };
}
;
