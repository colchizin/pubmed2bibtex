/*var pmid = 0;

function IsNumeric(input) {
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}

if (document.getSelection() != "") {
	alert("Etwas ausgewählt");
	if (IsNumeric(document.getSelection()))
		pmid=document.getSelection();
} else {
	var parts = location.href.split("/");
	if (IsNumeric(parts[parts.length-1])) {
		pmid = parts[parts.length-1];
	}
}

if (pmid!=0) {
	window.open("http://misshie.sakura.ne.jp/pm2bibtex/pm2bibtex.cgi?id="+pmid,"Pubmed to bibTeX","width=600,height=300,resizable,scrollbars");
} else {
	alert("Keine gültige PMID ausgewählt","Fehler");
}*/

var additionalInfo = {
  "title": document.title,
  "url" : location.href,
  "selection": document.getSelection().toString()
};

chrome.extension.connect().postMessage(additionalInfo);
