import { Header } from './Header';
import { Home } from './Home';
import { Menu } from './Menu';
import { Contact } from './Contact';
import './style.css';

class Content {
  contentDOM = document.querySelector('#content');
  body = document.querySelector('body');
  header = new Header();
  home = new Home();
  menu = new Menu();
  contact = new Contact();

  putChildInsideFamilyTree(
    parent, 
    children
    ) {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  };

  appendChildren() {
    this.body.classList.add('styleBody');
    
    this.putChildInsideFamilyTree(
      this.body, 
      [
        this.header.renderHeader()
      ]
    );

    this.putChildInsideFamilyTree(
      this.contentDOM, 
      [
        this.home.renderHome(),
        this.menu.renderMenu(),
        this.contact.renderContactContent(),
      ]
    );
  };
};

const classContent = new Content();

classContent.appendChildren();


class DisplayController {
  headerLinks = document.querySelectorAll('header.header > nav > ul > li > a');
  home = document.querySelector('div.home')
  menu = document.querySelector('div.menu');
  contact = document.querySelector('div.contact');

  elements = ['div.home'];

  hideElement() {
    this.menu.classList.add('hide');
    this.contact.classList.add('hide');
  };

  addElements(event) {
    let elementId = `div.${event.target.id}`;
    this.elements.push(elementId);
  };

  tabSwitcher() {
    
    this.headerLinks.forEach((element) => {
      
      element.addEventListener(
        'click', 
        (event) => {
          event.stopImmediatePropagation();
          this.addElements(event);
          const secondToTheLastElement = this.elements.slice(-2).reverse().slice(-1).toString();
          const lastElement = this.elements.slice(-1).toString();
          const contentToHide = document.querySelector(`${secondToTheLastElement}`);
          const contentToShow = document.querySelector(`${lastElement}`);
          contentToHide.classList.toggle('hide');
          contentToShow.classList.toggle('hide');
        });
    });
  }
};

const displayControl = new DisplayController();

displayControl.tabSwitcher();
displayControl.hideElement();