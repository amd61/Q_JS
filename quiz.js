Quiz

//1.  What does DOM stand for?

/*"The Document Object Model (DOM) is a programming interface for HTML and XML documents. It provides
a structured representation of the document and it defines a way that the structure can be accessed 
from programs so that they can change the document structure, style and content. The DOM provides a 
representation of the document as a structured group of nodes and objects that have properties and 
methods. Essentially, it connects web pages to scripts or programming languages."

2.  What is the name of the object we can use to get information about the browser enviroment?

    Window


3.  What is the name of the object that we can use to get access to the DOM representation of the  
    page?

    document

4.  What type of files might we see in the Network tab for in Chrome devTools?

    css, js, html

5.  What version of HTML is document.querySelector from?

    HTML5 


6.  Which event do we hook into when we want to know the DOM has loaded, window.onload or   
    document.onload?

    document.onload

7.  We use window.createElement to make new DOM elements, true or false?

    false

8.  List two ways to get all the elements by class 'cat'

    var elements = document.getElementsByClass('cat');
    var elements = document.querySelectorAll('.cat');

9.  List two ways to retrieve the element with id "goat"

    var element = document.getElementById('goat');
    var elements = document.querySelector('#goat');

10. List two ways to get all the li elements

    var elements  = document.getElementsByTagName('li');
    var elements = document.querySelectorAll('li')

11. List two ways to get the first li element

    var elements  = document.getElementByTagName('li');
    var elements = document.querySelector('li')

12. How can we set the a given element to be hidden?

    document.getElementById("goat").style.visibility = "hidden"
