const sm = document.getElementById('small')
const bg = document.getElementById('big')
const md = document.getElementById('medium')
const  handler1 = (e) => {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        console.log(e)
    }
}

const  handler2 = (e) => {
    e.stopPropagation()
        alert("yo")
}

const  handler3 = (e) => {
    e.stopPropagation()
        alert('hvhv')
}

//const handler2 = (event) => alert(event)

//sm.onclick = handler1
//sm.onclick = handler2
//sm.addEventListener('click', handler2)
sm.addEventListener('click', handler1)
bg.addEventListener('click', handler2)
md.addEventListener('click', handler3)
//sm.removeEventListener('click', handler2)

const a = document.getElementById('a')
a.addEventListener('click', (e) => {
    e.preventDefault()
    alert('FFFF')
})