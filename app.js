function Auto(brend, model, year, vin){
    this.brend = brend;
    this.model = model;
    this.year = year;
    this.vin = vin;
}

Auto.prototype.log = function(){
    console.log(this.brend+' '+this.model+' '+this.year);
}

Auto.prototype.checkVin = function(){
    console.log(this.vin.length === 16)
}

function Auto_Fuel(brend, model, year, vin, engineCapacity, consumption){
    this.brend = brend;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.engineCapacity = engineCapacity;
    this.consumption = consumption;
}

Auto_Fuel.prototype = Object.create(Auto.prototype);

Auto_Fuel.prototype.showFuelConsumption = function(){
    console.log(this.engineCapacity+'л' +' '+ this.consumption+'/100км')
}

function Auto_Electric(brend, model, year, vin, batteryPower){
    this.brend = brend;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.batteryPower = batteryPower
}

Auto_Electric.prototype = Object.create(Auto.prototype);

Auto_Electric.prototype.showBatteryConfig = function(){
    console.log(this.showBatteryConfig+ 'кВт/год')
}