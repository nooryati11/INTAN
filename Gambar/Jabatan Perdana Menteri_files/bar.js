    function tutup(){
		for(var i = 0,e = arguments.length;i < e;i++){
		var e = document.getElementById(arguments[i]).style;
		e.display = "none";
		}
	}

    function divHideShow(divToHideOrShow) 
    {
        var div = document.getElementById(divToHideOrShow);

        if (div.style.display == "block") 
        {

            div.style.display = "none";
        }
        else 
        {
			tutup('inisiatif');tutup('cloud');tutup('stat');tutup('links');tutup('polls');tutup('calendar');tutup('gallery');tutup('anugerah');
            div.style.display = "block";
			
        }

        
    }    