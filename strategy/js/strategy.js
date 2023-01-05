class SaleContex {
  
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy){
    this.strategy = strategy;
  }

  calculate(amount){
    return this.strategy.calculate(amount);
  }

}

//estrategia para una venta regular

class RegularSaleStrategy {

  constructor(tax){
    this.tax = tax;
  }
  calculate(amount){
    return amount + (amount * this.tax);
  }

}

//nueva estrategia

class DiscountSalesStrategy {
  constructor(tax,discount){
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + (amount * this.tax) - this.discount;
  }
}


const regularSale = new RegularSaleStrategy(0.16);
const discountSale = new DiscountSalesStrategy(0.16,3);
const sale = new SaleContex(regularSale);
console.log(sale.calculate(10))
sale.setStrategy(discountSale)
console.log(sale.calculate(10))