

var dc=document;

console.log("Font Started")

var url=window.location.href;

async function cust()
{
	url=window.location.href;
	console.log("cust");
	var url="file:///E:/MAyank%20Folder/Chrome/Extensions/Font/Websites/JSs/"+toCharSet(url.substr(url.indexOf(":")+3).split("/")[0])
	console.log(url)
	console.log((await Get(url)));
}

window.onload = cust;


function Get(u)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", u);
	return new Promise(
	(resolve)=>
	{
		xhr.onload = () => { resolve(xhr.response); };
		xhr.send();
	});
}










