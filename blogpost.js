var blog = document.getElementById('blogPost');//main section
blog1Content = 'lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah ';
blog2Content = 'lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah ';
blog3Content = 'lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah lala blah blah blah ';
// creating objects by calling function
blogPost1 = createBlogObject('My first Week at NSS', blog1Content, '05/26/2017');
blogPost2 = createBlogObject('Learning Javascript was not easy', blog2Content, '06/02/2017');
blogPost3 = createBlogObject('Deeper into Javascript', blog3Content, '06/09/2017');
//array of objects
var blogPostList = [blogPost1, blogPost2, blogPost3]; 
//function that creates and returns object for blog
function createBlogObject(title,copy,date) 
{
	var blogPost = {};
	blogPost.title = title;
	blogPost.copy = copy;
	blogPost.date = date;
	return blogPost;
}
//creating the DOM for each blog section
for(i=0;i<blogPostList.length;i++) 
{
	var section = document.createElement('section');//create sub-section
	section.setAttribute("class","blogSection");
	blog.appendChild(section);
	var header = document.createElement('header');// create header inside section
	var setH1 = document.createElement('h1'); // create h1 inside header
	header.appendChild(setH1);
	setH1.setAttribute("class","blogHeader");
	setH1.innerHTML = blogPostList[i].title;
	section.appendChild(header);
	var article = document.createElement('article');// create article inside section
	article.innerHTML = blogPostList[i].copy;
	section.appendChild(article);
	var footer = document.createElement('footer');// create footer inside section
	var setDate = document.createElement('date'); // create date inside footer
	footer.appendChild(setDate);
	section.appendChild(footer);
	setDate.innerHTML = blogPostList[i].date;
}