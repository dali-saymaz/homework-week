
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


var btn1=document.querySelector("#btn1");
var btn2=document.querySelector("#btn2");
var btn3=document.querySelector("#btn3");
var btn4=document.querySelector("#btn4");
var kutu=document.querySelector("#kutu");

btn1.onclick=function(){
  kutu.style.background="#ff0000";//div zemin rengini kırmızı yap
}
btn2.onclick=function(){
  kutu.style.color="#ffffff";//div yazı rengini beyaz yap
}
btn3.onclick=function(){
  kutu.style.background="#ff4000";//div zemin rengini kırmızı yap
}
btn4.onclick=function(){
  kutu.style.color="#fff5ff";//div yazı rengini beyaz yap
}
