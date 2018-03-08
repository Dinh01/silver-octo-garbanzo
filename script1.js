
	function showPicLarge (picPath) {
	  document.getElementById("largepic").src = picPath;
	}
	function nextPic () {
       console.log(document.getElementById("largepic").src);	
	   document.getElementById("largepic").src = getPicPath(document.getElementById("largepic").src, 2);
	  
	  
	}
	
	function prevPic () {
	  document.getElementById("largepic").src = getPicPath(document.getElementById("largepic").src, 1);
	}
	
	function getPicPath (current, type) {
	  let imgs = document.getElementsByClassName("Imagesmall");
	  let idx = -1;
	  for (let i=0;i<imgs.length;i++) {
	    if (imgs[i].src==current) {
		  idx = i;
		  break;
		}
	  }
	  if (idx<0) idx=0;
	  if (type==1) idx--;
	  else if (type==2) idx++;
	  if (idx<0) idx = imgs.length-1;
	  if (idx>=imgs.length) idx = 0;
	  return imgs[idx].src;
	  
	}
	
	
	
	