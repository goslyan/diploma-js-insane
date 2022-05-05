const numDown = () => {
    const arrowDown = document.querySelector('.header-contacts__arrow')
    const secPhone = document.querySelector('.header-contacts__phone-number-accord a')
    let count = 0
    
    arrowDown.addEventListener('click', () => {
        if (count == 0) {
            count = 1
            secPhone.style.opacity = 1
            secPhone.style.marginTop = 20 + 'px'
            arrowDown.style.transform = `rotate(180deg)`
        } else if (count == 1) {
            count = 0
            secPhone.style.opacity = 0
            secPhone.style.marginTop = 0
            arrowDown.style.transform = `rotate(0deg)`
        }
    })
}

export default numDown