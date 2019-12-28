import React from "react";

//include images into your bundle

//create your first component
export function Home() {
	const newElement = () => {
		var myNodelist = document.getElementsByTagName("LI");
		var i;
		for (i = 0; i < myNodelist.length; i++) {
			var span = document.createElement("SPAN");
			var txt = document.createTextNode("\u00D7");
			span.className = "close";
			span.appendChild(txt);
			myNodelist[i].appendChild(span);
		}

		// Click on a close button to hide the current list item
		var close = document.getElementsByClassName("close");
		var i;
		for (i = 0; i < close.length; i++) {
			close[i].onclick = function() {
				var div = this.parentElement;
				div.style.display = "none";
			};
		}

		// Add a "checked" symbol when clicking on a list item
		var list = document.querySelector("ul");
		list.addEventListener(
			"click",
			function(ev) {
				if (ev.target.tagName === "LI") {
					ev.target.classList.toggle("checked");
				}
			},
			false
		);
		var li = document.createElement("li");
		var inputValue = document.getElementById("myInput").value;
		var t = document.createTextNode(inputValue);
		li.appendChild(t);
		if (inputValue === "") {
			alert("You must write something!");
		} else {
			document.getElementById("myUL").appendChild(li);
		}
		document.getElementById("myInput").value = "";

		var span = document.createElement("SPAN");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		li.appendChild(span);

		for (i = 0; i < close.length; i++) {
			close[i].onclick = function() {
				var div = this.parentElement;
				div.style.display = "none";
			};
			newElement();
		}
	};
	// div.style.display = "none";

	return (
		<>
			<div className="container text-center mt-5">
				<div>
					<div id="myDIV" className="header  mx-auto">
						<h2 style={{ margin: "5px" }}>My To Do List</h2>
						<input
							type="text"
							id="myInput"
							placeholder="Title..."
						/>
						<span onClick="newElement()" className="addBtn">
							Add
						</span>
					</div>
					<ul id="myUL">
						<li>Hit the gym</li>
						<li className="checked">Pay bills</li>
						<li>Meet George</li>
						<li>Buy eggs</li>
						<li>Read a book</li>
						<li>Organize office</li>
					</ul>
				</div>
			</div>
		</>
	);
}
