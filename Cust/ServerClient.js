


var r,R;


async function Post(u, r, k=0)
{
	return (k ? await serverRequest(u, r, 'post') : serverRequest(u, r, a, 'post'));
}

async function Get(u, r="text", k=0)
{
	return (k ? await request(u, r, 'get') : request(u, r, 'get'));
}

function request(u, r, t)
{
	var xhr = new XMLHttpRequest();
	xhr.open(t, u);
	xhr.setRequestHeader('Accept',r);
	xhr.responseType = r;
	return new Promise(
	(resolve)=>
	{
		xhr.onload = () => { resolve(xhr.response); };
		xhr.send();
	});
}