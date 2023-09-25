export class Contact {
  contact = document.createElement('div');
  contactTitle = document.createElement('h2');
  form = document.createElement('form');
  ul = document.createElement('ul');
  li1 = document.createElement('li');
  li2 = document.createElement('li');
  li3 = document.createElement('li');
  li4 = document.createElement('li');
  label1 = document.createElement('label');
  label2 = document.createElement('label');
  label3 = document.createElement('label');
  inputFullName = document.createElement('input');
  inputEmail = document.createElement('input');
  inputMessage = document.createElement('textarea');
  button = document.createElement('button');
  address = document.createElement('address');
  h3 = document.createElement('h3');
  para = document.createElement('p');
  hours = document.createElement('div');
  table = document.createElement('table');
  caption = document.createElement('caption');
  h2 = document.createElement('h2');
  tbody = document.createElement('tbody');
  tr1 = document.createElement('tr');
  tr2 = document.createElement('tr');
  tr3 = document.createElement('tr');
  th1 = document.createElement('th');
  th2 = document.createElement('th');
  th3 = document.createElement('th');
  th4 = document.createElement('th');
  th5 = document.createElement('th');
  th6 = document.createElement('th');
  th7 = document.createElement('th');
  th8 = document.createElement('th');
  thOpen = document.createElement('th');
  thClosed = document.createElement('th');
  tdOpen1 = document.createElement('td');
  tdOpen2 = document.createElement('td');
  tdOpen3 = document.createElement('td');
  tdOpen4 = document.createElement('td');
  tdOpen5 = document.createElement('td');
  tdOpen6 = document.createElement('td');
  tdOpen7 = document.createElement('td');
  tdClosed1 = document.createElement('td');
  tdClosed2 = document.createElement('td');
  tdClosed3 = document.createElement('td');
  tdClosed4 = document.createElement('td');
  tdClosed5 = document.createElement('td');
  tdClosed6 = document.createElement('td');
  tdClosed7 = document.createElement('td');

  putChildInsideFamilyTree(
    parent,
    children
    ) {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  };

  renderContactContent() {
    this.contactTitle.textContent = 'Contact Us';
    this.label1.textContent = 'Full Name: ';
    this.label2.textContent = 'Email Address: ';
    this.label3.textContent = 'Message: ';
    this.button.textContent = 'Contact Us';
    this.para.textContent = 'You may want to use your map to find it.';
    this.h2.textContent = 'Hours';
    this.th1.textContent = 'Status';
    this.th2.textContent = 'Sun';
    this.th3.textContent = 'Mon';
    this.th4.textContent = 'Tue';
    this.th5.textContent = 'Wed';
    this.th6.textContent = 'Thu';
    this.th7.textContent = 'Fri';
    this.th8.textContent = 'Sat';
    this.thOpen.textContent = 'Open';
    this.thClosed.textContent = 'Closed';
    this.tdOpen1.textContent = '9:30AM';
    this.tdOpen2.textContent = '9:30AM';
    this.tdOpen3.textContent = '8:30AM';
    this.tdOpen4.textContent = '7:30AM';
    this.tdOpen5.textContent = '9:30AM';
    this.tdOpen6.textContent = '9:30AM';
    this.tdOpen7.textContent = '8:30AM';
    this.tdClosed1.textContent = '5:00AM';
    this.tdClosed2.textContent = '5:00AM';
    this.tdClosed3.textContent = '4:00AM';
    this.tdClosed4.textContent = '3:00AM';
    this.tdClosed5.textContent = '5:00AM';
    this.tdClosed6.textContent = '5:00AM';
    this.tdClosed7.textContent = '4:00AM';
    this.caption.textContent = 'Hours'

    this.form.setAttribute(
      'action', 
      ''
    );
    this.form.setAttribute(
      'method',
      'get'
    );
    this.label1.setAttribute(
      'for', 
      'full-name'
    );
    this.label2.setAttribute(
      'for', 
      'email-address'
    );
    this.label3.setAttribute(
      'for', 
      'message'
    );
    this.inputFullName.setAttribute(
      'type', 
      'text'
    );
    this.inputFullName.setAttribute(
      'id', 
      'full-name'
    );
    this.inputFullName.setAttribute(
      'required', 
      ''
    );
    this.inputFullName.setAttribute(
      'name', 
      'full-name'
    );
    this.inputFullName.setAttribute(
      'placeholder', 
      'John Ritche'
    );
    this.inputEmail.setAttribute(
      'type', 
      'email'
    );
    this.inputEmail.setAttribute(
      'required',
      '',
    )
    this.inputEmail.setAttribute(
      'id', 
      'email-address'
    );
    this.inputEmail.setAttribute(
      'name', 
      'email-address'
    );
    this.inputEmail.setAttribute(
      'placeholder', 
      'John@example.com'
    );
    this.inputMessage.setAttribute(
      'name', 
      'message'
    );
    this.inputMessage.setAttribute(
      'minlength', 
      '20'
    );
    this.inputMessage.setAttribute(
      'id', 
      'message'
    );
    this.inputMessage.setAttribute(
      'col', 
      '20',
    );
    this.inputMessage.setAttribute(
      'required', 
      ''
    );
    this.inputMessage.setAttribute(
      'rows', 
      '5'
    );
    this.inputMessage.setAttribute(
      'maxlength',
      '200'
    );
    this.button.setAttribute(
      'type', 
      'submit'
    );
    this.hours.classList.add(
      'hours'
    );

    const group = [
      this.th1, 
      this.th2, 
      this.th3, 
      this.th4, 
      this.th5, 
      this.th6, 
      this.th7, 
      this.th8
    ];

    group.forEach((item) => {
      item.setAttribute(
        'scope', 
        'col'
      );
    });

    const groupOpenClosed = [
      this.thClosed, 
      this.thOpen
      ];
    groupOpenClosed.forEach((item) => {
      item.setAttribute(
        'scope',
        'rows'
      );
    });

    this.contact.classList.add('contact');

    this.putChildInsideFamilyTree(
      this.contact, 
      [
        this.contactTitle,
        this.form,
        this.address,
        this.hours,
      ]
    );
    
    this.putChildInsideFamilyTree(
      this.ul,
      [
        this.li1,
        this.li2,
        this.li3,
        this.li4,
      ]
    );

    this.form.appendChild(this.ul);

    this.putChildInsideFamilyTree(
      this.li1,
      [
        this.label1,
        this.inputFullName
      ]
    );

    this.putChildInsideFamilyTree(
      this.li2,
      [
        this.label2,
        this.inputEmail
      ]
    );

    this.putChildInsideFamilyTree(
      this.li3,
      [
        this.label3,
        this.inputMessage
      ]
    );

    this.li4.appendChild(this.button);

    this.address.appendChild(this.h3);
    this.hours.appendChild(this.table);

    this.putChildInsideFamilyTree(
      this.table,
      [
        this.caption,
        this.tbody
      ]
    );

    this.putChildInsideFamilyTree(
      this.tbody,
      [
        this.tr1,
        this.tr2,
        this.tr3
      ]
    );

    this.tr2.appendChild(this.thOpen);
    this.tr3.appendChild(this.thClosed);

    this.putChildInsideFamilyTree(
      this.tr1,
      [
        this.th1,
        this.th2,
        this.th3,
        this.th4,
        this.th5,
        this.th6,
        this.th7,
        this.th8
      ]
    );

    this.putChildInsideFamilyTree(
      this.tr2,
      [
        this.tdOpen1,
        this.tdOpen2,
        this.tdOpen3,
        this.tdOpen4,
        this.tdOpen5,
        this.tdOpen6,
        this.tdOpen7
      ]
    );

    this.putChildInsideFamilyTree(
      this.tr3,
      [
        this.tdClosed1,
        this.tdClosed2,
        this.tdClosed3,
        this.tdClosed4,
        this.tdClosed5,
        this.tdClosed6,
        this.tdClosed7
      ]
    );

    return this.contact;
  };
};