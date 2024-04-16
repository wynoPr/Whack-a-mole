


const counter = document.querySelector('[data-function="time-left"]')
const points = document.querySelector('[data-function="score"]')
let scored = document.querySelector('[data-function="scored"]')
const btt$$ = document.querySelector('.start_button')
let counterData = parseInt(counter.textContent)
let pointsData = parseInt(points.textContent)
let clock

//close explanation

const cross$$ = document.querySelector('.explanation_close')
const back$$ = document.querySelector('.explanation_back')

const close = () => {
    back$$.setAttribute('style',"display: none")
}
cross$$.addEventListener('click', close)
back$$.addEventListener('click', close)

//close score

const crossS$$ = document.querySelector('.score_close')
const backS$$ = document.querySelector('.score_back')

const closeS = () => {
    backS$$.setAttribute('style',"display: none")
}
crossS$$.addEventListener('click', closeS)
backS$$.addEventListener('click', closeS)

//close mobile block

const crossB$$ = document.querySelector('.mobile_block_close')
const window$$ = document.querySelector('.mobile_block')

const closeB = () => {
    window$$.setAttribute('style',"display: none")
}
crossB$$.addEventListener('click', closeB)
window$$.addEventListener('click', closeB)

//counter

const timer = () => {
    
    counterData--

    //console.log(counterData)

    counter.textContent = counterData

    moles ()

    if(counterData === 0){
        clearInterval(clock);
        btt$$.setAttribute('style',"display: block")
        btt$$.textContent = 'Restart'
        backS$$.setAttribute('style',"display: flex")
    }
}

//dobletap
function simularDobleTap() {
    console.log('tap-tap')
    // Obtener las dimensiones de la ventana
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calcular las coordenadas del centro de la pantalla
    var centerX = windowWidth / 2;
    var centerY = windowHeight / 2;

    // Crear evento táctil para el primer toque
    var touchStart = new Touch({
        identifier: Date.now(),
        target: document.documentElement,
        clientX: centerX,
        clientY: centerY,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: 0.5
    });

    // Crear evento táctil para el segundo toque (doble tap)
    var touchEnd = new Touch({
        identifier: Date.now(),
        target: document.documentElement,
        clientX: centerX,
        clientY: centerY,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: 0.5
    });

    // Despachar el evento de inicio del primer toque
    document.dispatchEvent(new TouchEvent('touchstart', {
        cancelable: true,
        bubbles: true,
        touches: [touchStart],
        targetTouches: [touchStart],
        changedTouches: [touchStart],
        shiftKey: true
    }));

    // Despachar el evento de finalización del segundo toque (doble tap)
    setTimeout(function() {
        document.dispatchEvent(new TouchEvent('touchend', {
            cancelable: true,
            bubbles: true,
            touches: [],
            targetTouches: [],
            changedTouches: [touchEnd],
            shiftKey: true
        }));
    }, 100); // Ajusta este valor según sea necesario para simular el tiempo entre toques
}


//reloj

btt$$.addEventListener('click', () => {
    if(counterData===30){
        clock = setInterval(timer, 1000);
        btt$$.setAttribute('style',"display: none");

        simularDobleTap();
        setTimeout(simularDobleTap(), 300)

    }else if(counterData===0){
        counter.textContent = 30
        counterData = 30
        clock = setInterval(timer, 1000);
        btt$$.setAttribute('style',"display: none");
        points.textContent = 0
        scored.textContent = 0
    }
    else if ( counterData !== 0 || counterData !== 30 ){
        clearInterval('No toques java mientras estoy funcionando, que igual me rompo.');
    }
}
)

//identificador celdas

const squares = document.querySelectorAll('[data-function="square"]')

const identifyCells = () => {
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i]
        let positionCl = 'b-square square' + '_' + i
        square.setAttribute('data-position', i)
        square.setAttribute('class', positionCl)
        //console.log(square)
}
}
identifyCells()

//moles

const moles = () => {
    
    const molePosition = Math.floor(Math.random() * 9)
    const moleType = Math.floor(Math.random() * 3)

    //console.log('mole position '+ molePosition)
    //console.log( 'mole type '+ moleType)

    const positionCl = '.square_' + molePosition;
    const position$$ = document.querySelector(positionCl)

    const add1 = () => {
        position$$.removeEventListener('click', add1)
        position$$.removeEventListener('touchstart', add1)
        pointsData++
        console.log(counterData)
        points.textContent = pointsData
        scored.textContent = pointsData
        position$$.setAttribute('style',"background-image: url('2x/mole_5.png')")
        setTimeout(clear, 200)
    } 
    const add2 = () => {
        position$$.removeEventListener('click', add2)
        position$$.removeEventListener('touchstart', add2)
        pointsData = pointsData + 2
        console.log(counterData)
        points.textContent = pointsData
        scored.textContent = pointsData
        position$$.setAttribute('style',"background-image: url('2x/mole_5.png')")
        setTimeout(clear, 200)
    }

    const min2 = () => {
        position$$.removeEventListener('click', min2)
        position$$.removeEventListener('touchstart', min2)
        pointsData = pointsData - 2
        console.log(counterData)
        points.textContent = pointsData
        scored.textContent = pointsData
        position$$.setAttribute('style',"background-image: url('2x/mole_5.png')")
        setTimeout(clear, 300)
    }
    
    if( moleType === 0){
        position$$.setAttribute('style',"background-image: url('2x/mole_4a.png')")
        position$$.setAttribute('data-value','1')
        position$$.addEventListener('click', add1)
        position$$.addEventListener('touchstart', add1)
    }
    else if( moleType === 1){
        position$$.setAttribute('style',"background-image: url('2x/mole_4b.png')")
        position$$.setAttribute('data-value','1')
        position$$.addEventListener('click', add2)
        position$$.addEventListener('touchstart', add2)
    }
    else if( moleType === 2){
        position$$.setAttribute('style',"background-image: url('2x/mole_4c.png')")
        position$$.setAttribute('data-value','1')
        position$$.addEventListener('click', min2)
        position$$.addEventListener('touchstart', min2)
    
    }
    const clear = () => {
        position$$.setAttribute('style',"background-image: url(2x/hole.png)")
        position$$.removeAttribute('data-value')
        position$$.removeEventListener('click', add1)
        position$$.removeEventListener('touchstart', add1)
        position$$.removeEventListener('click', add2)
        position$$.removeEventListener('touchstart', add2)
        position$$.removeEventListener('click', min2)
        position$$.removeEventListener('touchstart', min2)
    }
    
    setTimeout(clear, 700)
}
