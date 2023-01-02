const turnOn = document.getElementById ( 'turnOn' )
const turnOff = document.getElementById ( 'turnOff' )
const lamp = document.getElementById ( 'lamp' )

function itsBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}


function lampBroken() {
    if (!itsBroken() ) {
        lamp.src = 'img/quebrada.jpg'
    }
}

function lampOn() {
    if ( !itsBroken() ) {
        lamp.src = 'img/ligada.jpg'
    }
}

function lampOff() {
    if ( !itsBroken() ) {
        lamp.src = 'img/desligada.jpg'
    }
    
}


turnOn.addEventListener ( 'click', lampOn)
turnOff.addEventListener ( 'click', lampOff)
lamp.addEventListener ( 'mouseover', lampOn)
lamp.addEventListener ( 'mouseleave', lampOff)
lamp.addEventListener ( 'mouseup', lampBroken)


