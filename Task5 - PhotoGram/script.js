// Define the post1 object with the given details.
// #Main 
let post1 = {
    id: 1,
    author: 'John',
    content: 'My first Post!',
    likes: 10,
    comments: ['Great post!', 'Nice photo!'],
    image: 'https://files.codingninjas.in/image2-28694.jpg'
  };

// destructuring  post1 to use all the member variables directly
const {
  id,
  author ,
  content,
  likes,
  comments,
  image 
} = post1;

renderPosts();

// #Main 
  // Function to render the post1 object on the screen.
  function renderPosts() {
    let postsElement = document.getElementById("posts");

    let singlePostElem = document.createElement("div");
    singlePostElem.className = "post";
    let headingPostElem = document.createElement("h3");
    headingPostElem.className = "headingpost";
    headingPostElem.innerHTML = author;
    let imagepostElem = document.createElement("img");
    imagepostElem.setAttribute("src",image);
    imagepostElem.classList.add("imagepost");
    let parapostElem = document.createElement("p");
    parapostElem.innerHTML = content;
    parapostElem.className = "parapost";

    singlePostElem.append(headingPostElem,imagepostElem,parapostElem);
    postsElement.append(singlePostElem);

    // Get the container where the post will be added.
  
  
    // Clear any existing content in the posts container.
  
  
    // Create a new div element for the post and set its class.
  
  
    // Create an h3 element for the author's name and set its text content.
    
   
    // Create an img element for the post's image and set its source and alt text.
    
  
    // Create a p element for the post's content and set its text content.
    
  
    // Create a button element for "Like" and set its text content.
    
  
    // Create an input element for writing comments and set its type and placeholder.
   
  
    // Create a button element for "Comment" and set its text content.
   
  
    // Create a div element for the post footer and set its class and text content.
   
  
    // Create a div element for the comments container and set its class.
    // Initially, set its display style to 'none' to hide it.
   
  
    // For each comment in the comments array, create a p element and append it to the comments container.
    
  
    // Append all created elements to the post container.
    
  
    // Add a click event listener to toggle the visibility of commentsContainer.
    
  
    // Append the post element to the posts container.
  }
  
  // Call the renderPosts function to display the post on the screen.
  