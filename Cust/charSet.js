
//function d(a){document.write("<BR/>"+a)}

numCharSet = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
smlCharSet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
capCharSet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

_64CharSet = numCharSet.concat(capCharSet.concat(smlCharSet.concat(['-', '_'])));

prefrLen = {64:8, 10:1, 36:10, 62:8}

function toCharSet(str, chrst=_64CharSet)
{
	var r="", i=0, j="", l=str.length, n, L=chrst.length
    for(;i<l;++i)
    {
        for(n="";i<l && n.length<14;++i)
        {
        	n+=""+(str.charCodeAt(i)-32)
            j+=str[i]
        }
    	while(n>0)
    	{
    		r+=chrst[n%L]
        	n=Math.floor(n/L)
    	}
		--i
    }
    return r;
}

//d("Mayank Maurya")
//d(toCharSet("Mayank Maurya"))
