# NOTES:

__CSS:__
- The `transform-origin` CSS property sets the "origin" for an element's transformations.
    - i.e., for `transform: rotate(deg),` `transform-origin` refers to the center by which the rotation occurs.
    - It takes lengths, percentages, or keywords `left`, `center`, `right`, `top`, and `bottom`.

__JS:__

- You can create a new Date object, and extract from it details like
    - Month
    - Day (including of the week)
    - Year
    - Hours
    - Minutes
    - Seconds, etc.
By using something like: 
```
const now = new Date(); 
# The Date Object represents a single moment in time (platform-independent format, so you may need to format it yourself) using the _epoch_ (January 1, 1970) as reference 

console.log(now.toDateString()); # Output: "Sat May 10 2025" for example
```