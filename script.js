function decrementTipPercentage() {
  document.getElementById('tippercentage').value--;
}

function incrementTipPercentage() {
  document.getElementById('tippercentage').value++;
}

function decrementNumberOfPeople() {
  document.getElementById('numberofpeople').value--;
}

function incrementNumberOfPeople() {
  document.getElementById('numberofpeople').value++;
}

//Amount class for calulating tip per person and total per person
//Amount class has fields bill, tipPercentage, numberOfPeople
//Amount class has methods calcTipPerPerson, calcTotalPerPerson
class Amount {
  constructor(bill, tipPercentage, numberOfPeople) {
    //class fields
    this.bill = bill;
    this.tipPercentage = tipPercentage;
    this.numberOfPeople = numberOfPeople;
  }

  calcTipPerPerson() {
    //throwing exceptions on invalid input values
    if (this.numberOfPeople <= 0)
      throw new Error('Number of people cant be less than 1');
    if (this.bill <= 0) throw new Error('Bill cant be less than 1');
    if (this.tipPercentage <= 0)
      throw new Error('Tip Percentage cant be less than 1');

    //calculating tip per person
    return (this.bill * (this.tipPercentage / 100)) / this.numberOfPeople;
  }

  calcTotalPerPerson() {
    //throwing exceptions on invalid input values
    if (this.numberOfPeople <= 0)
      throw new Error('Number of people cant be less than 1');
    if (this.bill <= 0) throw new Error('Bill cant be less than 1');
    if (this.tipPercentage <= 0)
      throw new Error('Tip Percentage cant be less than 1');

    //calculating total per person
    return (
      (this.bill + this.bill * (this.tipPercentage / 100)) / this.numberOfPeople
    );
  }
}

//function creates a object of Amount class with the values in the form
//sets the h3 tags text with the tip per person and total per person
//catches and handles exceptions thrown on invaid input values
function calculateAmount() {
  const bill = parseInt(document.getElementById('bill').value);
  const tipPercentage = parseInt(
    document.getElementById('tippercentage').value
  );
  const numberOfPeople = parseInt(
    document.getElementById('numberofpeople').value
  );

  if (bill === NaN || tipPercentage === NaN || numberOfPeople === NaN) return;

  //exception handling with try catch
  try {
    const amount = new Amount(bill, tipPercentage, numberOfPeople);

    document.getElementById('tipperperson').innerHTML =
      'Tip per Person : $' + amount.calcTipPerPerson();

    document.getElementById('totalperperson').innerHTML =
      'Total per Person : $' + amount.calcTotalPerPerson();
  } 
  catch (e) {
    alert('Exception: ' + e.message);
  }
}
