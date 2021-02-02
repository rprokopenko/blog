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

  async createPost(post) {
    const storageRef = firebase.storage().ref();

    const storageChild = storageRef.child(post.cover.name);
    const postCover = await storageChild.put(post.cover);
    const downloadURL = await storageChild.getDownloadURL();
    const fileRef = postCover.ref.location.path;

    let newPost = {
      cover: downloadURL,
      fileref: fileRef,
      title: post.title,
      category: post.category,
      content: post.content,

      likes: 0,
      views: 0,
      //time: firebase.firestore.Timestamp.now(),
    };

    const firestorePost = await firebase
      .firestore()
      .collection('posts')
      .add(newPost)
      .catch((err) => {
        console.log(err);
      });

    return firestorePost;
  }
}

export default new Firebase();
