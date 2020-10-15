


function ChngItNow(a)
{
	console.log("Changing website")
	if(((window.location.href.match(/\//g) || []).length)<4)
		return;
		var info=["#321900","#EBBE96"];
		gebn("body")[0].innerHTML=gebn("article")[0].innerHTML;
		var bd=gebn("body", 2);
		bd.position="absolute";
		bd.margin="10px";
		bd.zIndex="10";
		bd.backgroundColor=info[0];
		gebn("h1",2).color=info[1];
		bd.color=info[1];
		bd.fontSize="32px";
		bd.width="98%";
		bd.left="0";
		bd.right="0";
		var a=gebn("a"), s=gebn("section")[0];
		var i=0, l=a.length;
		for(; i<l; ++i)
		{
			a[i].style.color=info[1];
			a[i].style.textDecoration="underline";
		}
		var dv=s.getElementsByTagName("div");
		i=0; l=dv.length;
		for(; i<l; ++i)
			dv[i].style.display="none";
		var cn=s.getElementsByTagName("center");
		i=0; l=cn.length;
		for(; i<l; ++i)
			cn[i].style.display="none";
		var p=gebn("section")[0].getElementsByTagName("p");
		i=0; l=p.length;
		for(; i<l; ++i)
			p[i].style.zIndex="10";
		gebn("h1",2).fontSize="40px";
		for(i=0; i<5; ++i)
		{
			gebn("i",2,dc,i).fontSize="32px";
			gebc("tumbsvotes",2,dc,i).fontSize="32px";
		}
		gebn("a",2,dc,5).display="none";
}

