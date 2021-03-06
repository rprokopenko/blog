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

    const posts = await this.db.collection('posts').orderBy('time', 'desc').get();

    posts.forEach((doc) => {
      postsArray.push({ id: doc.id, data: doc.data() });
    });

    return postsArray;
  }

  async getPost(postID, isLike) {
    const postRef = await this.db.collection('posts').doc(postID);

    await postRef.update({
      views: firebase.firestore.FieldValue.increment(1),
    });

    if (isLike) {
      await postRef.update({
        likes: firebase.firestore.FieldValue.increment(1),
      });
    }

    const post = await postRef.get();
    const postData = post.data();
    return postData;
  }

  async setLikePost(postID) {
    const postRef = await this.db.collection('posts').doc(postID);

    await postRef.update({
      likes: firebase.firestore.FieldValue.increment(1),
    });
  }

  async createPost(post) {
    const storage = firebase.storage();
    const ref = storage.ref(post.cover.name);
    const postCover = await ref.put(post.cover);
    const downloadURL = await postCover.task.snapshot.ref.getDownloadURL();

    let newPost = {
      cover: downloadURL,
      fileRef: post.cover.name,
      title: post.title,
      category: post.category,
      content: post.content,
      likes: 0,
      views: 0,
      time: firebase.firestore.Timestamp.now(),
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

  async updatePost(postID, postData) {
    if (postData['cover']) {
      const storageRef = firebase.storage().ref();
      const storage = firebase.storage();
      const ref = storage.ref(postData.cover.name);
      const postCover = await ref.put(postData.cover);
      const downloadURL = await postCover.task.snapshot.ref.getDownloadURL();

      //delete the old cover
      await storageRef
        .child(postData['oldcover'])
        .delete()
        .catch((err) => {
          console.log(err);
        });

      let updatedPost = {
        cover: downloadURL,
        fileRef: postData.cover.name,
        title: postData.title,
        category: postData.category,
        content: postData.content,
        //time: firebase.firestore.Timestamp.now(),
      };

      const post = await firebase
        .firestore()
        .collection('posts')
        .doc(postID)
        .set(updatedPost, { merge: true })
        .catch((err) => {
          console.log(err);
        });

      return post;
    } else {
      const post = await firebase
        .firestore()
        .collection('posts')
        .doc(postID)
        .set(postData, { merge: true })
        .catch((err) => {
          console.log(err);
        });

      return post;
    }
  }

  async deletePost(postID, fileref) {
    const storage = firebase.storage().ref();

    await storage
      .child(fileref)
      .delete()
      .catch((err) => {
        console.log(err);
      });

    const post = await firebase
      .firestore()
      .collection('posts')
      .doc(postID)
      .delete()
      .catch((err) => console.log(err));

    return post;
  }

  async getCategories() {
    const categories = await this.db
      .collection('categories')
      .doc('ALL')
      .get()
      .then(function (doc) {
        if (doc.exists) return doc.data();
        return Promise.reject('No such document');
      });

    return categories;
  }
}

export default new Firebase();
