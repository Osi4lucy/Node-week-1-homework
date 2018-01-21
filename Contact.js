


class Contact {
    // your code here
  constructor (name, age) {
    this.name = name;
    this.age = age;
  };
   greetings () {
     console.log("Hello, my name is " + this.name + "." + " I am " + this.age + " years old");
   }
   addPhone (number) {
     return this.phoneNumber = number;
   }
   call () {
     if (this.phoneNumber)
     console.log("Calling " + this.name + " at " + this.phoneNumber);
     else
       console.log(this.name + " has no phone number seved");
   }
   birthday () {
    console.log("Wishing " + this.name +  " a happy " + (this.age+1) + "th birthday!");
   }
};
// // remember to write a constructor function
 
module.exports = Contact;
