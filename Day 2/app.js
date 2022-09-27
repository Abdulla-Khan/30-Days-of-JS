
const sec_hand = document.querySelector('.sec-hand')
const min_hand = document.querySelector('.min-hand')
const hour_hand = document.querySelector('.hour-hand')



console.log()

function setDate() {
    //movement of seconds hand
    const now = new Date()
    const sec = now.getSeconds()
    const sec_deg = ((sec / 60) * 360) + 90
    sec_hand.style.transform = `rotate(${sec_deg}deg)`

    //movement of minutes hand
    const mins = now.getMinutes()
    const mins_deg = ((mins / 60) * 360) + 90
    min_hand.style.transform = `rotate(${mins_deg}deg)`

    //movement of hours hand
    const hour = now.getHours()
    const hour_deg = ((hour / 60) * 360) + 90
    hour_hand.style.transform = `rotate(${hour_deg}deg)`
    console.log(sec, mins, hour)



}

setInterval(setDate, 1000)