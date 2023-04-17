## Why this project

In this project I learnt about how to work with react forms and basic props drilling.

Later I tries to migrate from prop drilling to contextAPI that react offers to understand the use case of it better.

### Topics covered in this section!

1. useEffect and side-effects.
2. useEffect cleanup.
3. React Context API.
4. Refactoring the Input Component.

#### Why we send the http request in the useEffect and not in the components itself

We use useEffect hook to avoid infinite loop that will be created if the http request change some state in the component.

To have control over the order of execution of our component.
