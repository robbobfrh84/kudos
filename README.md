## Unit Assignment: Kudos Board

Submitted by: Bob Main

Deployed Application (**required**): [Kudos Board Deployed Site](https://kudos-mfz5.onrender.com/)

### Application Features

#### CORE FEATURES

##### Home Page

- [x] **Home Page Display**
  - [x] Home page includes the following features:
    - [x] Header
    - [x] Banner
    - [x] Search bar
    - [x] List of boards
    - [x] Footer
- [x] **Display Boards**
  - [x] Users can view a list of all boards in a grid view on the home page.
  - [x] For each board displayed, users can see:
    - [x] An image/gif
    - [x] A board title
- [x] **Filter Boards**
  - [x] Home page includes navigation bar, drop down, or some other mechanism which allows users to filter boards by the following categories:
    - [x] All/Home (displays all boards)
    - [x] Recent (displays the 6 most recently created boards)
    - [x] Celebration
    - [x] Thank you
    - [x] Inspiration
  - [x] When a category is clicked, boards matching the specified category are displayed.
- [x] **Search Functionality**
  - [x] Users can use a search bar to search for boards by title on the home page.
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search Button
    - [x] Clear Mechanism
  - [x] Boards with a title containing the search query in the text input field are displayed in a grid view when the user:
    - [x] Presses the Enter key
    - [x] Clicks the Submit/Search button 
  - [x] User can delete all text from the text input field. 
  - [x] When all text is cleared from the text input field, all boards are displayed in a grid view
- [x] **View Board** 
  - [x] Users can click on a board in the grid view to navigate to a new page containing that board's details.
- [x] **Add New Board**
  - [x] Users can create a new board on the home page.
  - [x] When creating a new board, users can specify the:
    - [x] Title (required)
    - [x] Category (required)
    - [x] Author (optional)
  - [x] Items listed as required above must have a value to succesffuly create a new board.
  - [x] When the board is successfully created, it appears in the grid of boards. 
- [x] **Delete Board**
  - [x] User can delete boards on the home page. 
  - [x] When the board is deleted, the board disappears from the grid of boards. 

##### Board Page

- [x] **Display Cards**
  - [x] For a given board, the board's page displays a list of all cards for that board in a grid view.
  - [x] For each card should displayed, users can see the card's:
    - [x] Message
    - [x] Gif 
    - [x] Number of upvotes
    - [x] Delete button
- [x] **Add New Card**
  - [x] Users can make a new card associated with the current board. 
  - [x] To successfully create a new card, users must specify the following:
    - [x] Text message (required).
    - [x] A gif found using the [GIPHY API](https://developers.giphy.com/docs/api/) (required).
  - [x] Users are given the option to specify the author of the card.
  - [x] When the new card is successfully created, it appears in the grid of cards. 
- [x] **Upvote Card**
  - [x] Users can upvote a card.
  - [x] Update the vote count on the card tile when a user clicks the upvote icon.
  - [x] When the upvote icon is clicked the upvote count increases by 1. 
  - [x] A user can upvote a card multiple times. 
- [x] **Delete Card**
  - [x] Users can delete cards.
  - [x] When the user clicks the delete button for a card, the card disappears from the grid of cards. 
- [x] **Deployment**
  - [x] Website is deployed via Render.
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 

### Walkthrough Video

LINK: https://www.loom.com/share/0dac097001b544e7ae5dfb1147999da9
