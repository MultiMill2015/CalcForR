
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
    /*fifth machine*/
    hourValue5 = parseInt(document.getElementById('fifthPartPriceHour').value)
    minuteValue5 = parseInt(document.getElementById('fifthPartPriceMinute').value) / 60
    moneyHourValue5 = document.getElementById('fifthMachineHourCost').value 
    MachinePrice5 = (Math.round(((hourValue5 + minuteValue5) * moneyHourValue5)* 100) / 100)

    document.getElementById("fifthMachineResult").innerHTML = MachinePrice5 + '€'

    /*sixth machine*/
    hourValue6 = parseInt(document.getElementById('sixthPartPriceHour').value)
    minuteValue6 = parseInt(document.getElementById('sixthPartPriceMinute').value) / 60
    moneyHourValue6 = document.getElementById('sixthMachineHourCost').value 
    MachinePrice6 = (Math.round(((hourValue6 + minuteValue6) * moneyHourValue6)* 100) / 100)

    document.getElementById("sixthMachineResult").innerHTML = MachinePrice6 + '€'

    /*seventh machine*/
    hourValue7 = parseInt(document.getElementById('seventhPartPriceHour').value)
    minuteValue7 = parseInt(document.getElementById('seventhPartPriceMinute').value) / 60
    moneyHourValue7 = document.getElementById('seventhMachineHourCost').value 
    MachinePrice7 = (Math.round(((hourValue7 + minuteValue7) * moneyHourValue7)* 100) / 100)

    document.getElementById("seventhMachineResult").innerHTML = MachinePrice7 + '€'

    /*eighth machine*/
    hourValue8 = parseInt(document.getElementById('eighthPartPriceHour').value)
    minuteValue8 = parseInt(document.getElementById('eighthPartPriceMinute').value) / 60
    moneyHourValue8 = document.getElementById('eighthMachineHourCost').value 
    MachinePrice8 = (Math.round(((hourValue8 + minuteValue8) * moneyHourValue8)* 100) / 100)

    document.getElementById("eighthMachineResult").innerHTML = MachinePrice8 + '€'

    /*ninth machine*/
    hourValue9 = parseInt(document.getElementById('ninthPartPriceHour').value)
    minuteValue9 = parseInt(document.getElementById('ninthPartPriceMinute').value) / 60
    moneyHourValue9 = document.getElementById('ninthMachineHourCost').value 
    MachinePrice9 = (Math.round(((hourValue9 + minuteValue9) * moneyHourValue9)* 100) / 100)

    document.getElementById("ninthMachineResult").innerHTML = MachinePrice9 + '€'

    /*Total Result*/
    totalPrice = Math.round((MachinePrice1 + MachinePrice2 + MachinePrice3 + MachinePrice4 + MachinePrice5 + MachinePrice6 + MachinePrice7 + MachinePrice8 + MachinePrice9) * 100) / 100
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
    c3.value = 55;

    document.getElementById("thirdMachineResult").innerHTML = 0 + '€';

    let a4 = document.getElementById("forthPartPriceHour");
    a4.value = 0;
    let b4 = document.getElementById("forthPartPriceMinute");
    b4.value = 0;
    let c4 = document.getElementById("forthMachineHourCost");
    c4.value = 55;

    document.getElementById("forthMachineResult").innerHTML = 0 + '€';

    let a5 = document.getElementById("fifthPartPriceHour");
    a5.value = 0;
    let b5 = document.getElementById("fifthPartPriceMinute");
    b5.value = 0;
    let c5 = document.getElementById("fifthMachineHourCost");
    c5.value = 60;

    document.getElementById("fifthMachineResult").innerHTML = 0 + '€';

    let a6 = document.getElementById("sixthPartPriceHour");
    a6.value = 0;
    let b6 = document.getElementById("sixthPartPriceMinute");
    b6.value = 0;
    let c6 = document.getElementById("sixthMachineHourCost");
    c6.value = 55;
    document.getElementById("sixthMachineResult").innerHTML = 0 + '€';


    let a7 = document.getElementById("seventhPartPriceHour");
    a7.value = 0;
    let b7 = document.getElementById("seventhPartPriceMinute");
    b7.value = 0;
    let c7 = document.getElementById("seventhMachineHourCost");
    c7.value = 45;
    document.getElementById("seventhMachineResult").innerHTML = 0 + '€';


    let a8 = document.getElementById("eighthPartPriceHour");
    a8.value = 0;
    let b8 = document.getElementById("eighthPartPriceMinute");
    b8.value = 0;
    let c8 = document.getElementById("eighthMachineHourCost");
    c8.value = 30;
    document.getElementById("eighthMachineResult").innerHTML = 0 + '€';


    let a9 = document.getElementById("ninthPartPriceHour");
    a9.value = 0;
    let b9 = document.getElementById("ninthPartPriceMinute");
    b9.value = 0;
    let c9 = document.getElementById("ninthMachineHourCost");
    c9.value = 30;
    document.getElementById("ninthMachineResult").innerHTML = 0 + '€';


    document.getElementById("totalPriceFromAllMachines").innerHTML = 0 + " € Total";


}
