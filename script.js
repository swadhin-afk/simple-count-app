const count = document.querySelector('.count')
const minusbtn = document.querySelector ('.minus-btn')
const plusbtn = document.querySelector ('.plus-btn')
const changing = document.querySelector( '.changing')
const Resetbtn =  document.querySelector('.Reset-btn')


plusbtn.addEventListener('click',() => {
    const countvalue = parseInt( count.innerText)
    const changingvalue = parseInt (changing.value)
    count.innerText = countvalue + changingvalue
})
minusbtn.addEventListener('click',() => {
    const countvalue = parseInt( count.innerText)
    const changingvalue = parseInt (changing.value)
    count.innerText = countvalue - changing.value
    
})
Resetbtn.addEventListener ('click', () => {
count.innerText=0
}

)