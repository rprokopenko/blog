import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCLhNZve_cQorlZUZkkw_scHwUb3grXRBA',
  authDomain: 'blog-3c2f2.firebaseapp.com',
  projectId: 'blog-3c2f2',
  storageBucket: 'blog-3c2f2.appspot.com',
  messagingSenderId: '437058172972',
  appId: '1:437058172972:web:38c8f42b66bc54d02ab989',
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  async getPosts() {
    let postsArray = [];

    const posts = await this.db.collection('posts').orderBy('views', 'desc').get();
    posts.forEach((doc) => {
      postsArray.push({ id: doc.id, data: doc.data() });
    });

    return postsArray;
  }

  async getPost(postid) {
    const post = await firebase.firestore().collection('posts').doc(postid).get();
    const postData = post.data();
    return postData;
  }

  async loginUser(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }

  async logoutUser() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err));
    return logout;
  }
}

export default new Firebase();
