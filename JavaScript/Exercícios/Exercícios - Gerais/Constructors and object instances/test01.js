//Criando uma função construtura
function Products(name, value, description, totalAmount, sold) {
    this.name = name;
    this.value = value;
    this.description = description;
    this.totalAmount = totalAmount;
    this.sold = sold;
    this.availableQuantity = function() {
        return this.totalAmount - this.sold;
    };
    this.presentation = function() {
        return this.name + ' é ' + this.description + '\nSeu valor está na faixa dos R$ ' + `${(this.value).toFixed(2)}` + '. Restam apenas ' + this.availableQUantity + ' unidades. Corra!';
    };
}

const laptop = new Products("MacBook Air", 6499.00, "rápido e de alta qualidade!", 1000, 740);
console.log(laptop.presentation());
