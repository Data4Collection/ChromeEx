


var dc=document, wn=window;

function addScript(src, typ="application/javascript", cont="", a=0, d=0, p=0, nic="", t=0, T, id, cls)
{
	if(t!=true)
	{
		if(typ==undefined) typ="";
		if(src==undefined) src="";
		if(cont==undefined) cont="";
		if(a==undefined) a="";
		if(d==undefined) d="";
		if(a==true) a="true";
		if(d==true) d="true";
		if(T==true) src+="?t="+new Date()/1;
		//alert(src);
	}
	var ps, el;
	//var s="<script type=\""+typ+"\" src=\""+src+"\" "+a+" "+d+">"+cont+"</script>";
	if(p==0)
		ps=dc;
	else if(p==1)
		ps=gebi(nic);
	else if(p==2)
		ps=gebc(nic);
	else if(p=3)
		ps=gebn(nic);
	else
		ps=dc;
	el = dc.createElement('script');
	el.src=src;
	el.type=typ;
	el.async=a;
	el.defer=d;
	el.innerHTML=cont;
	if(id!=undefined)
		el.id=id;
	if(cls!=undefined)
		el.class=cls;
	ps.appendChild(el);
}

function gebi(a, b, c=dc)
{
	var r = c.getElementById(a);
	if(b == 0)
		return r;
	if(b == 1)
		return r.innerHTML;
	if(b == 2)
		return r.style;
	if(b == 3)
		return r.value;
	return r;
}

function gebc(a, b, c=dc, n=0)
{
	var r = c.getElementsByClassName(a);
	if(b<6)
		r=r[n];
	if(b == 0)
		return r;
	if(b == 1)
		return r.innerHTML;
	if(b == 2)
		return r.style;
	if(b == 3)
		return r.value;
	return r;
}

function gebn(a, b, c=dc, n=0)
{
	var r = dc.getElementsByTagName(a);
	if(b<6)
		r=r[n];
	if(b == 0)
		return r;
	if(b == 1)
		return r.innerHTML;
	if(b == 2)
		return r.style;
	if(b == 3)
		return r.value;
	return r;
}

function gsoi(a, b)
{
	var e=gebi(a);
	if(b==1)
		e=e.options[e.selectedIndex].value;
	return e;
}

function gsoc(a, b)
{
	var e=gebc(a);
	if(b==1)
		e=e.options[e.selectedIndex].value;
	return e;
}

/*function sleep(ms)
{
	return new Promise((resolve)=>{setTimeout(()=>{resolve();},ms);});
}*/

async function Sleep(ts)
{
	console.log(typeof(ts))
	if(typeof(ts)!='string')
		return await sleep(parseInt(ts));
	var t=parseFloat(ts), s=ts[ts.length-1];
	/*console.log(ts)
	console.log(t)
	console.log(s)*/
	if(s=='s')
		return await sleep(t*1000);
	if(s=='m')
		return await sleep(t*1000*60);
	if(s=='h')
		return await sleep(t*1000*60*60);
	if(s=='d')
		return await sleep(t*1000*60*60*24);
	if(s=='w')
		return await sleep(t*1000*60*60*24*7);
	else
		return await sleep(t)
}

function ntEmpt(n)
{
	if(n==undefined || n==null || n==NaN)
		return false;
	return true;
}

function Empt(n)
{
	if(n==undefined || n==null || n==NaN)
		return true;
	return false;
}

function strAry(a)
{
	return (((a[0]=='['?a.substring(1, a.length-1):a)).replace(/\"/g,'')).split(',');
}

function sleep(ms) { return new Promise(rslv=>{setTimeout(()=>rslv(), ms)}) }


