let source = document.querySelector('button');
const ls = localStorage;
source.addEventListener('click',(e) => {
	e.preventDefault();
	
	let amount = document.getElementById('amount').value;
	let amount2 = document.getElementById('new')
    let first = document.getElementById('first')
    let first_curr = first.options[first.selectedIndex].value;
    let second = document.getElementById('second')
    let sec_curr = second.options[second.selectedIndex].value;

    let convertor = 0;  
    let count = 0;
    	for(let i = 0; i <ls.length ; i++) 
    	{
            let item = JSON.parse(ls.getItem(i))    	
    		if(item.includes(first_curr)&&sec_curr==="CAD") 
    		{
              count++;
              convertor = item[1];
    		}
    	}  
    	if(count!==0)
    		{
    			amount2.value = convertor*amount
    		} 
    	else {
        
        let url = `http://api.fixer.io/latest?symbols=${sec_curr}&base=${first_curr}`

	        fetch(url)
	       .then(resp => { return resp.json();
	        })
	       .then(json => {
	       let amount2 = document.getElementById('new')
	       for(key in json.rates)
	      {
	       amount2.value = json.rates[key]*amount;
	       if(sec_curr==="CAD") 
	        {
             let arr = [];
             arr[0] = first_curr;
             arr[1] = json.rates[key];
             ls.setItem(ls.length,JSON.stringify(arr))
	         }
           } 
	     })
        
      }
    
   

})