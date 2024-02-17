

 document.getElementById('addCart-1').addEventListener('click',function(event){
    add()
    addS()
    let place = event.target.parentNode.parentNode.childNodes[1].innerText
    let price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText
    let addList = document.getElementById('content')
    let makeList = document.createElement('ul')
    makeList.setAttribute('class','flex justify-center gap-2 text-[20px] font-bold')
    let List1 = document.createElement('li')
    List1.innerText = place
    let List2 = document.createElement('li')
    List2.innerText = price
    addList.appendChild(makeList)
    makeList.appendChild(List1)
    makeList.appendChild(List2)

    let count = document.getElementById('total');
    let countNum = count.innerText
    let countConvertNum = parseInt(countNum)
    let countConvertNumUp = countConvertNum + parseInt(price)
    let countNumber = count.innerText = countConvertNumUp

})
document.getElementById('addCart-2').addEventListener('click',function(event){
    add()
    addS()
    let place = event.target.parentNode.parentNode.childNodes[1].innerText
    let price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText
    let addList = document.getElementById('content')
    let makeList = document.createElement('ul')
    makeList.setAttribute('class','flex justify-center gap-2 text-[20px] font-bold')
    let List1 = document.createElement('li')
    List1.innerText = place
    let List2 = document.createElement('li')
    List2.innerText = price
    addList.appendChild(makeList)
    makeList.appendChild(List1)
    makeList.appendChild(List2)

    let count = document.getElementById('total');
    let countNum = count.innerText
    let countConvertNum = parseInt(countNum)
    let countConvertNumUp = countConvertNum + parseInt(price)
    let countNumber = count.innerText = countConvertNumUp

})
document.getElementById('addCart-3').addEventListener('click',function(event){
    add()
    addS()
    let place = event.target.parentNode.parentNode.childNodes[1].innerText
    let price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText
    let addList = document.getElementById('content')
    let makeList = document.createElement('ul')
    makeList.setAttribute('class','flex justify-center gap-2 text-[20px] font-bold')
    let List1 = document.createElement('li')
    List1.innerText = place
    let List2 = document.createElement('li')
    List2.innerText = price
    addList.appendChild(makeList)
    makeList.appendChild(List1)
    makeList.appendChild(List2)

    let count = document.getElementById('total');
    let countNum = count.innerText
    let countConvertNum = parseInt(countNum)
    let countConvertNumUp = countConvertNum + parseInt(price)
    let countNumber = count.innerText = countConvertNumUp
})
document.getElementById('addCart-4').addEventListener('click',function(event){
    add()
    addS()
    let place = event.target.parentNode.parentNode.childNodes[1].innerText
    let price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText
    let addList = document.getElementById('content')
    let makeList = document.createElement('ul')
    makeList.setAttribute('class','flex justify-center gap-2 text-[20px] font-bold')
    let List1 = document.createElement('li')
    List1.innerText = place
    let List2 = document.createElement('li')
    List2.innerText = price
    addList.appendChild(makeList)
    makeList.appendChild(List1)
    makeList.appendChild(List2)

    let count = document.getElementById('total');
    let countNum = count.innerText
    let countConvertNum = parseInt(countNum)
    let countConvertNumUp = countConvertNum + parseInt(price)
    let countNumber = count.innerText = countConvertNumUp
})

function add(){
    let count = document.getElementById('count');
        let countNum = count.innerText
        let countConvertNum = parseInt(countNum)
        let countConvertNumUp = countConvertNum + 1
        let countNumber = count.innerText = countConvertNumUp
}
function addS(){
    let count = document.getElementById('count');
    let countNum = count.innerText
    let constSNum = document.getElementById('count-s')
    let constInner = constSNum.innerText = countNum
}


let btn = document.querySelectorAll('.div .disUp')
let btnM = document.querySelectorAll('.div .disM')


for (const btns of btn) {
    btns.addEventListener('click',function(event){
        let dis = event.target.childNodes[1].innerText
        let btnNum = parseInt(dis)
        let total = document.getElementById('total');
        let totalText = total.innerText
        let totalNum = parseInt(totalText)
        let totalMain = totalNum + btnNum
        let grand = document.querySelectorAll ('.h1 .gra')
        for (const grands of grand) {
            totalNumber = grands.innerText = totalMain
            // -----------------
            let budgets = document.querySelectorAll ('.h3 .bud')
            for(budget of budgets){
             let budgetText =  budget.innerText
             let budgetNum = parseInt(budgetText)
             budgetIs = budgetNum - totalNumber
             let budg = budget.innerText = budgetIs
             if(budg < 0){
                alert('low budget please earn more')
                let budget = document.getElementById('budget')
                budget.innerText = 1000  
                let grand = document.getElementById('grand')   
                grand.innerText = 0
                let total = document.getElementById('total')   
                total.innerText = 0  
              }
         }
        }

    })
}
        for (const btns of btnM) {
            btns.addEventListener('click',function(event){
                let dis = event.target.childNodes[1].innerText
                let btnNum = parseInt(dis)
                let total = document.getElementById('total');
                let totalText = total.innerText
                let totalNum = parseInt(totalText)
                let totalMain = totalNum - btnNum
                let grand = document.querySelectorAll ('.h1 .gra')
                for (const grands of grand) {
                    totalNumber = grands.innerText = totalMain
                    // -----------------
                    let budgets = document.querySelectorAll ('.h3 .bud')
                    for(budget of budgets){
                      let budgetText =  budget.innerText
                      let budgetNum = parseInt(budgetText)
                      budgetIs = budgetNum - totalNumber
                      let budg =  budget.innerText = budgetIs
                      if(budg < 0){
                        alert('low budget please earn more')
                        let budget = document.getElementById('budget')
                        budget.innerText = 1000 
                        let grand = document.getElementById('grand')   
                        grand.innerText = 0
                        let total = document.getElementById('total')   
                        total.innerText = 0
                      }
                    }
                    // ----------
                    // let budget = document.getElementById('budget')
                    // let budgetText = budget.innerText;
                    // let budgetNum = parseInt(budgetText)
                    // budgetIs = budgetNum - totlNumber
                    // console.log(budgetIs)
                }
})
 }
     
//  let budget = document.getElementById('budget')
//  let budgetText = budget.innerText;
//  let budgetNum = parseInt(budgetText)
//  console.log(budgetNum)