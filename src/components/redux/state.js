let store = {
  
_state: {
  profilePage: {
      postsData: [
          {message:"hello my friends, my name is Anton", counter: 18, id:1},
          {message:"hi, how are you?", counter: 20, id:2},
          ],
          newPostText: 'Postt',
  },
  messagesPage: {
      messagesData: [
          {message: "Hi!", id: 1},
          {message: "How are you?", id: 2},
          {message: "Thank you", id: 3},
          {message: "Hello", id: 4},
          {message: "My friend", id: 5},
        ],
        dialogsData: [
          {name: "Anton", id: 1},
          {name: "Nikolays", id: 2},
          {name: "Viktoria", id: 3},
          {name: "Sveta", id: 4},
          {name: "Andrey", id: 5},
          {name: "Sergey", id: 6},
        ],
        newMessageText: 'message',
  },
  sideBar: {
    friendsData: [
      {name: "Antonio", id: 1},
      {name: "Viktor", id: 2},
      {name: "Valera", id: 3},
    ],
  },
  newsPage: {
    newsPageText: 'Page news!',
  },
},
getState() {
  return this._state;
},
_callSubscriber() {
  console.log('checked!');
},
addPost() {

  let newPost = {
    id: 3,
    message: this._state.profilePage.newPostText,
    counter: 0,

  };
  
  this._state.profilePage.postsData.push(newPost);
  this._state.profilePage.newPostText = '';
  this._callSubscriber(this._state);

},
updateNewPostText (newText) {
  this._state.profilePage.newPostText = newText;
  this._callSubscriber(this._state);
},
addMessage() {
  let newMessage = {
    id: 8,
    message: this._state.messagesPage.newMessageText,
  };

  this._state.messagesPage.messagesData.push(newMessage);
  this._state.messagesPage.newMessageText = '';
  this._callSubscriber(this._state);

},
updateNewMessageText (newText) {
  this._state.messagesPage.newMessageText = newText;
  this._callSubscriber(this._state);

},
subscribe(observer) {
  this._callSubscriber = observer;
},


};

export default store;  