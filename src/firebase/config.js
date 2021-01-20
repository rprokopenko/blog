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

  async getPostsByCategory(categoryName) {
    let postsArray = [];

    const posts = await this.db.collection('posts').where('category', '==', `${categoryName}`).get();
    posts.forEach((doc) => {
      postsArray.push({ id: doc.id, data: doc.data() });
    });

    return postsArray;
  }

  async getPostsByPopular() {
    let postsArray = [];

    const posts = await this.db.collection('posts').orderBy('likes', 'desc').limit(4).get();
    posts.forEach((doc) => {
      postsArray.push({ id: doc.id, data: doc.data() });
    });

    return postsArray;
  }

  async getPostsByLatest() {
    let postsArray = [];

    const posts = await this.db.collection('posts').orderBy('time', 'desc').limit(3).get();
    posts.forEach((doc) => {
      postsArray.push({ id: doc.id, data: doc.data() });
    });

    return postsArray;
  }
}

export default new Firebase();
