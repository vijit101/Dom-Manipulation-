  const blogData = [
      {
        title: 'First Blog Post',
        date: 'January 1, 2022',
        content: 'this is content of the first blog page.'
      },
      {
        title: 'Second Blog Post',
        date: 'February 1, 2022',
        content: 'This is the content of the second blog post.'
      },
      {
        title: 'Third Blog Post',
        date: 'March 1, 2022',
        content: 'This is the content of the third blog post.'
      }
    ];

    function addBlog(blogObj){
      const divPost = document.createElement("div");
      divPost.className = "blog-post";


      const headerDiv = document.createElement("div");
      headerDiv.className = "blog-header";

      const elemH2 = document.createElement("h2");
      elemH2.innerHTML = blogObj.title;
      elemH2.className = "blog-title";
      const elemPara = document.createElement("p");
      elemPara.className = "blog-date";
      elemPara.innerHTML = blogObj.date;

      const elemParaContent = document.createElement("p");
      elemParaContent.className = "blog-content";
      elemParaContent.innerHTML = blogObj.content;
      headerDiv.append(elemH2,elemPara);
      divPost.append(headerDiv);
      divPost.append(elemParaContent);
      const blogLst = document.querySelector(".blog-list");
      blogLst.append(divPost);
    }
  //Create your function here with the name addBlog which takes a blog object as parameter
  //Call each object present in blogData with addBlog.
  //If page does not update the changes automatically please refresh