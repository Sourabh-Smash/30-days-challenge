(function () {
  const customerImage = document.querySelector('#customer-img');
  const customerName = document.querySelector('#customer-name');
  const customerText = document.querySelector('#customer-text');
  const btn = document.querySelectorAll('.btn');
  // console.log(btn);
  // console.log(customerName);
  // console.log(customerImage);
  // console.log(customerText);
  let index = 0;
  const customers = [];

  function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
  }
  function createCustomer(img, name, text) {
    let Img =`imgs/${img}.jpeg`;
    let customer = new Customer(Img, name, text);
    customers.push(customer);
  }
  createCustomer(
    0,
    'Sourabh',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab at aspernatur, fugit aliquid maiores. Ea ratione nemo repudiandae excepturi! This is 0th'
  );
  createCustomer(
    1,
    'Gautham',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab at aspernatur, fugit aliquid maiores. Ea ratione nemo repudiandae excepturi! This is 1th'
  );
  createCustomer(
    2,
    'Bhavesh',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab at aspernatur, fugit aliquid maiores. Ea ratione nemo repudiandae excepturi! This is 2th'
  );
  createCustomer(
    3,
    'Naman',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab at aspernatur, fugit aliquid maiores. Ea ratione nemo repudiandae excepturi! This is 3th'
  );
  createCustomer(
    4,
    'Elon',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab at aspernatur, fugit aliquid maiores. Ea ratione nemo repudiandae excepturi! This is 4th'
  );

  btn.forEach(button => {
    button.addEventListener('click', e => {
      if (e.target.parentElement.classList.contains('prevBtn')) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        customerImage.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }
      if (e.target.parentElement.classList.contains('nextBtn')) {
        index++;
        if (index === customers.length) {
          index = 0;
        }
        customerImage.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }
    });
  });
})();
