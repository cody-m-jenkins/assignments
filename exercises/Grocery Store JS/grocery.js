//shopper object will include string, number, boolean, and function

var shopper = {
    firstName: 'Bill',
    lastName: 'Shopper',
    age: 20,
    isHungry: true,
    groceryCart: ['hot dogs', ' hot dog buns', ' Juanitas chips', ' guacamole'],
    shopperAnouncement : function() {
       return 'My name is ' + this.firstName + ' ' + this.lastName +'. I am ' + this.age + 'years old and I am buying ' + this.groceryCart + '.'
    }
}

console.log(shopper.shopperAnouncement())

