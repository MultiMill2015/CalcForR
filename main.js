function getPriceFromTimeAndHourPrice() {
    /*First machine*/
    hourValue1 = parseInt(document.getElementById('firstPartPriceHour').value)
    minuteValue1 = parseInt(document.getElementById('firstPartPriceMinute').value) / 60
    moneyHourValue1 = document.getElementById('firstMachineHourCost').value 
    MachinePrice1 = (Math.round(((hourValue1 + minuteValue1) * moneyHourValue1)* 100) / 100)
    
    document.getElementById("firstMachineResult").innerHTML = MachinePrice1 + '€'

    /*Second machine*/
    hourValue2 = parseInt(document.getElementById('secondPartPriceHour').value)
    minuteValue2 = parseInt(document.getElementById('secondPartPriceMinute').value) / 60
    moneyHourValue2 = document.getElementById('secondMachineHourCost').value 
    MachinePrice2 = (Math.round(((hourValue2 + minuteValue2) * moneyHourValue2)* 100) / 100)
    
    document.getElementById("secondMachineResult").innerHTML = MachinePrice2 + '€'

    /*Third machine*/
    hourValue3 = parseInt(document.getElementById('thirdPartPriceHour').value)
    minuteValue3 = parseInt(document.getElementById('thirdPartPriceMinute').value) / 60
    moneyHourValue3 = document.getElementById('thirdMachineHourCost').value 
    MachinePrice3 = (Math.round(((hourValue3 + minuteValue3) * moneyHourValue3)* 100) / 100)
    
    document.getElementById("thirdMachineResult").innerHTML = MachinePrice3 + '€'

    /*Forth machine*/
    hourValue4 = parseInt(document.getElementById('forthPartPriceHour').value)
    minuteValue4 = parseInt(document.getElementById('forthPartPriceMinute').value) / 60
    moneyHourValue4 = document.getElementById('forthMachineHourCost').value 
    MachinePrice4 = (Math.round(((hourValue4 + minuteValue4) * moneyHourValue4)* 100) / 100)

    document.getElementById("forthMachineResult").innerHTML = MachinePrice4 + '€'

    /*Total Result*/
    totalPrice = Math.round((MachinePrice1 + MachinePrice2 + MachinePrice3 + MachinePrice4) * 100) / 100
    document.getElementById("totalPriceFromAllMachines").innerHTML = totalPrice + " € Total";
}

/*reset all inputs*/

function reset() {

    let a1 = document.getElementById("firstPartPriceHour");
    a1.value = 0;
    let b1 = document.getElementById("firstPartPriceMinute");
    b1.value = 0;
    let c1 = document.getElementById("firstMachineHourCost");
    c1.value = 85;
    document.getElementById("firstMachineResult").innerHTML = 0 + '€';
    
    let a2 = document.getElementById("secondPartPriceHour");
    a2.value = 0;
    let b2 = document.getElementById("secondPartPriceMinute");
    b2.value = 0;
    let c2 = document.getElementById("secondMachineHourCost");
    c2.value = 75;
    document.getElementById("secondMachineResult").innerHTML = 0 + '€';


    let a3 = document.getElementById("thirdPartPriceHour");
    a3.value = 0;
    let b3 = document.getElementById("thirdPartPriceMinute");
    b3.value = 0;
    let c3 = document.getElementById("thirdMachineHourCost");
    c3.value = 60;
    document.getElementById("thirdMachineResult").innerHTML = 0 + '€';


    let a4 = document.getElementById("forthPartPriceHour");
    a4.value = 0;
    let b4 = document.getElementById("forthPartPriceMinute");
    b4.value = 0;
    let c4 = document.getElementById("forthMachineHourCost");
    c4.value = 45;
    document.getElementById("forthMachineResult").innerHTML = 0 + '€';
    document.getElementById("totalPriceFromAllMachines").innerHTML = 0 + " € Total";


}
