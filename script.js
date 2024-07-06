const sideItems = document.querySelectorAll('.sidebar .side-content .item') 
const quickAccesItems = document.querySelectorAll('.quick-acess .item')
const tablerows = document.querySelectorAll('table tbody tr')

function setSelected(list, selected) {
  list.forEach(item => {
    item.classList.remove('selected')
  })
  selected.classList.add('selected')
}

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
  if(!closestDiv.classList.contains('item') || cloclosestDiv.classList.contains('side-content')) {
    quickAccesItems.forEach(item => {
      item.classList.remove('selected')
    })
  } 
  if (!e.target.closest('tr')) {
    tablerows.forEach(row => {
      row.classList.remove('selected')
    })
  }
})

sideItems.forEach(item => {
  item.addEventListener('click', (e) => {
    setSelected(sideItems, item)
  })
})