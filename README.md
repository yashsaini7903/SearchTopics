Topic Search

This project is a React-based implementation of a Topic Search interface that simulates the topic browsing experience of TOTLE’s Catalogue Management System. The component allows users to search topics in real time and view filtered results in a clean, responsive UI.

Features

Real-time topic filtering based on the search input

Case-insensitive search functionality

Displays topic cards containing topic name and category

Shows a fallback message if no topics match

Fully responsive design

Fixed header with search bar aligned to the right

Graceful handling of empty search input

In-memory data (minimum five topics)

Tech Stack

React.js

JavaScript (ES6+)

CSS (custom responsive styling)

Project Structure
topic-search/
│── public/
│── src/
│   ├── components/
│   │     └── TopicSearch.jsx
|   |     |__ TopicSearch.css
│   ├── data/
│   │     └── topics.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js


Component Overview
TopicSearch Component

The TopicSearch component consists of:

A fixed top header occupying full width

Application title: "Browse Topics"

Search input on the right side of the header

A responsive grid layout to display topic cards

Logic to filter topics as the user types

Filtering Logic

Search input is converted to lowercase, and topics are filtered based on substring match:

topics.filter(topic =>
   topic.name.toLowerCase().includes(searchValue.toLowerCase())
)
