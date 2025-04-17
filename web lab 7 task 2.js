let containers = document.getElementsByClassName("container");
let texts = ["This is the first container", "This is the second container", "This is the third container"];

for (let i = 0; i < containers.length; i++) {
    containers[i].innerText = texts[i];
}