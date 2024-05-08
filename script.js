//your JS code here. If required.
let button1 = document.getElementId("enterBtn");
let s = document.getEl;ementId("status");
button1.addEventListener("click",handleClick);
function handleClick(e) {
	e.preventDefault();
	let h1 = document.createElement("h1");
	s.innerText=null;
	h1.innerText="Entered Metaverse";
	s.append(h1);
	
}