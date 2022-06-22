const newblog=document.getElementsByClassName("blogarea");
const displaybtn=document.getElementById("btnDisplay");
const textarea=document.getElementById("textarea");
const titletext=document.getElementById("titletext");
const bckcolors=document.getElementById("bckcolors");
const blogposts=document.getElementById("blogposts");
const txtcolors=document.getElementById("txtcolors");

btnDisplay.addEventListener('click', function(){
CreateBlog();
selectBackground();
})
/* display button */
function CreateBlog(){
    let blogNode=document.createElement("div")
    blogNode.classList.add("blogarea")
    //title
    let titleNode=document.createElement("p");
    let title=document.createTextNode(titletext.value);
    titleNode.appendChild(title);
    blogNode.appendChild(titleNode);
    titleNode.classList.add("blog-title");
    //date
    let dateNode=document.createElement("p");
    let dateText=document.createTextNode(new Date());
    dateNode.classList.add("blog-date");
    dateNode.appendChild(dateText);
    blogNode.appendChild(dateNode);
    //content
    let contentNode=document.createElement("p");
    let contentText=document.createTextNode(textarea.value);
    contentNode.appendChild(contentText);
    blogNode.appendChild(contentNode);
    blogposts.appendChild(blogNode);

}
function selectBackground(){
    var e = document.getElementById("bckcolors");
    var BackgroundValue = e.options[e.selectedIndex].value;
    document.getElementById("blogposts").style.backgroundColor = BackgroundValue;}

    