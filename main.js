const big = document.querySelector("#big")
const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')
const s3 = document.querySelector('#s3')
const s4 = document.querySelector('#s4')


function changetobig(str) {

    if (str == "./img/1.png") {
        document.getElementById("pro1").classList.remove("d-none")
        return "./img/11.jpg"
    } else if (str == "./img/2.jpg") {
        document.getElementById("pro2").classList.remove("d-none")
        return "./img/222.jpg"
    } else if (str == "./img/3.jpg") {
        document.getElementById("pro3").classList.remove("d-none")
        return "./img/32.jpg"
    } else if (str == "./img/4.jpg") {
        document.getElementById("pro4").classList.remove("d-none")
        return "./img/42.jpg"
    } else {
        document.getElementById("pro0").classList.remove("d-none")
        return "./img/com.png"
    }
}
//change to big 
function changetosmall(str) {

    if (str == "./img/11.jpg") {
        document.getElementById("pro1").classList.add("d-none")
        return "./img/1.png"
    } else if (str == "./img/222.jpg") {
        document.getElementById("pro2").classList.add("d-none")
        return "./img/2.jpg"
    } else if (str == "./img/32.jpg") {
        document.getElementById("pro3").classList.add("d-none")
        return "./img/3.jpg"
    } else if (str == "./img/42.jpg") {
        document.getElementById("pro4").classList.add("d-none")
        return "./img/4.jpg"
    } else {
        document.getElementById("pro0").classList.add("d-none")
        return "./img/coms.png"
    }
}

s1.addEventListener('click', () => {

    let old = big.getAttribute("src")
    console.log(old)
    big.setAttribute('src', changetobig(s1.getAttribute("src")))
    s1.setAttribute("src", changetosmall(old))
})
s2.addEventListener('click', function test() {

    let old = big.getAttribute("src")
    big.setAttribute('src', changetobig(s2.getAttribute("src")))
    s2.setAttribute("src", changetosmall(old))
})
s3.addEventListener('click', () => {

    let old = big.getAttribute("src")
    big.setAttribute('src', changetobig(s3.getAttribute("src")))
    s3.setAttribute("src", changetosmall(old))
})
s4.addEventListener('click', () => {

    let old = big.getAttribute("src")
    big.setAttribute('src', changetobig(s4.getAttribute("src")))
    s4.setAttribute("src", changetosmall(old))
})



