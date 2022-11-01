const wrapper = document.getElementById("wrapper");
const rand = (min,max)=> Math.floor(Math.random()* (max-min+1)+min);
let prev = rand(1,4)

setInterval(()=>{
	
	wrapper.dataset.configuration = prev
	next = rand (1,4)

	while(prev == next){
		prev = rand(1,4)
	}
	
}, 1500)