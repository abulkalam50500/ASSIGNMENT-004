1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer: getElementById is used to select a specific element by its unique ID, its return one single element.
        On the other hand, getElementsByClassName is used to select element by className, its return a collection.Because many elements can have the same class.
        Lastly, querySelector and querySelectorAll can work both ID And Class selector querySelector return only first matching element If there are many elements. On the other side, querySelectorAll return all maching element  If there are many elements.


2. How do you create and insert a new element into the DOM?
answer: first create a new element using document.createElement() and this add tag name.
        After creating element insert the webpage using appendChild() on a parent element.

3. What is Event Bubbling? And how does it work?
answer: Event Bubbling is when an event start from the main element where we click, then it goes up to its parent   element. Step by step transfer of events from child to parent. This process is called event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?
answer: Event Delegation means giving an event listener to the parent element.Clicking on a child element causes the parent to handle it.


5. What is the difference between preventDefault() and stopPropagation() methods?
answer: preventDefault() and stopPropagation() — two methods are related to events.But work is different.
        preventDefault() is used to disable the default behavior any element.
         stopPropagation() is used to stop event bubbling.

