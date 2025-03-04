var TaxIndiaEmp = function() { 
	var grossTaxableIncome;
    //getters and setters
    this.getIncome     = function()      { return grossTaxableIncome || 0; };
    this.setIncome     = function (grossIncome) { grossTaxableIncome = grossIncome;};
};
TaxIndiaEmp.prototype.calculateTDS = function()
{
	var myTax = 0;
	if (this.getIncome() > 250000 && this.getIncome() <= 500000) {
		myTax = (this.getIncome()-250000) * 10/100;
		return myTax;
	}
	else if (this.getIncome() > 500000 && this.getIncome() <= 1000000) {
		myTax = (this.getIncome()-500000) * 20/100;
		return myTax;
	}
	else if (this.getIncome() > 1000000) {
		myTax = (this.getIncome()-1000000) * 30/100;
		return myTax;
	}
};