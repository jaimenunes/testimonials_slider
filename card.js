//get the section one and change for section two
function change(){
    var get = document.getElementById('secOne')
    get.style.display = 'none'
    var take = document.getElementById('secTwo')
    take.style.display = 'block'
}
//get the section two and change for section one
function back(){
    var get= document.getElementById('secTwo')
    get.style.display ='none'
    var take = document.getElementById('secOne')
    take.style.display = 'block'
}