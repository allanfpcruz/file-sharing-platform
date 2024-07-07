//selecão de elementos
const sideItems = document.querySelectorAll('.sidebar .side-content .item') 
const quickAccesItems = document.querySelectorAll('.quick-acess .item')
const tablerows = document.querySelectorAll('table tbody tr')
const menuBtn = document.getElementById('menu-btn')
const leftSection = document.querySelector('.left-section')

//funções
function setSelected(list, selected) {
  list.forEach(item => {
    item.classList.remove('selected')
  })
  selected.classList.add('selected')
}

//eventos
tablerows.forEach(tr => {
  tr.addEventListener('click', (e) => {
    setSelected(tablerows, tr)
  })
})

quickAccesItems.forEach(item => {
  item.addEventListener('click', (e) => {
      setSelected(quickAccesItems, item)
  })
})

document.addEventListener('click', (e) => {
  let closestDiv = e.target.closest('div')
  let cloclosestDiv = closestDiv.parentNode
  //remove focus dos itens do quick acess
  if(!closestDiv.classList.contains('item') || cloclosestDiv.classList.contains('side-content')) {
    quickAccesItems.forEach(item => {
      item.classList.remove('selected')
    })
  } 
  //remove focus dos itens da tabela
  if (!e.target.closest('tr')) {
    tablerows.forEach(row => {
      row.classList.remove('selected')
    })
  }
  //fecha sidebar quando tela < 992
  if (window.innerWidth < 992 && !closestDiv.classList.contains('icon-btn') && !closestDiv.classList.contains('left-section') && !closestDiv.classList.contains('sidebar') && !closestDiv.classList.contains('side-content')) {
    leftSection.style.left = '-160px'
  }
})

sideItems.forEach(item => {
  item.addEventListener('click', (e) => {
    setSelected(sideItems, item)
  })
})

menuBtn.addEventListener('click', () => {
  if(leftSection.style.left == '-160px') {
    leftSection.style.left = '0'
  } else {
    leftSection.style.left = '-160px'
  }
})

window.addEventListener('resize', () => {
  if(window.innerWidth > 992) {
    leftSection.style.left = '0'
  } else if (window.innerWidth <= 992) {
    leftSection.style.left = '-160px'
  }
})