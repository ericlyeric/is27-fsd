# is27-fsd
A simple Web application that tracks and manages boats, the web application works on mobile and on a PC.

# Tech Stack
React.js, Node.js, Express.js, MongoDB, Jest

# Assumptions
- User Authentication / Authorization was not included in the solution
  - hence there is no elevated access control, everyone is an 'Admin'

# Front-end 
- leveraged open-source libraries
- used Bootstrap for the UI, as well as react-beautiful-dnd
- create-react-app template was used as a starter boilerplate

# Back-end
- uses an MVC style file/folder structure

# Testing
- most testing was done manually
- the front-end contains snapshot testing
- the back-end has a few ajax request tests

# Notes
- application is deployed no Heroku (front-end + back-end)
- some endpoints in the service are not used in the front-end, the routes were used during development
