# nexgen-input-validation

This is an interview task provided by NexGen.

The form contains the following fields:
1. Fullname - must a string, required, between 10 and 30 characters
2. Email - must be a valid email format, required
3. Age - number, must be between 16 and 70, required
4. Password - must be a string between 6 and 12 characters, required
5. Birthday - must be a valid date between 1956 (age 70) and 2006 (age 16), required
6. Mobile number - must be a valid phone number in format +359 010 01 0101
7. Profile picture - must be a file of type image/jpeg or image/jpg, max size is 3MB
8. Website - must be a valid website URL
9. Bio - a string no longer than 40 characters

It has a Reset button which reloads the page in order to clear all data.

Upon submition it is checking whether the required fields are filled and if they are it makes a POST request to a bin HTTP: https://httpbin.org/post

It is styled with styled components with responsive design. Nothing too crazy, just to make it nice and neat.
