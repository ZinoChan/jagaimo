import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: YOUR_API_KEY_HERE,
    authDomain: YOUR_AUTH_DOMAIN_HERE,
    databaseURL: YOUR_DATABASE_URL_HERE,
    projectId: YOUR_PROJECT_ID_HERE,
    storageBucket: YOUR_STORAGE_BUCKET_HERE,
    messagingSenderId: YOUR_MESSAGING_HERE,
    appId: YOUR_AP_ID_HERE
};




class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    //AUTH
    createAccount = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    updatePassword = password => this.auth.currentUser.updatePassword(password);

    reauthenticate = (currentPassword) => {
        const user = this.auth.currentUser;
        const cred = app.auth.EmailAuthProvider.credential(user.email, currentPassword);

        return user.reauthenticateWithCredential(cred);
    } 

    updateProfile = (id, updates) => this.db.collection('users').doc(id).update(updates);


    changePassword = (currentPassword, newPassword) => {
        return new Promise((resolve, reject) => {
            this.reauthenticate(currentPassword).then(() => {
                const user = this.auth.currentUser;
                user.updatePassword(newPassword).then(() => {
                    resolve('Password successfully updated!');
                }).catch(e => reject(e));
            }).catch(e => reject(e));
        })
    }

    updateEmail = (password, newEmail) => {
        return new Promise((resolve, reject) => {
            this.reauthenticate(password).then(() => {
                this.auth.currentUser.updateEmail(newEmail).then(() => {
                    resolve('Email updated successfully');
                }).catch(e => reject(e))
            }).catch(e => reject(e));
        })
    }

    
    onAuthStateChange = () => {
        return new Promise((resolve, reject) => {
            this.auth.onAuthStateChanged(user => {
                if(user){
                    resolve(user);
                }else{
                    reject(new Error('Auth State change failed'));
                }
            });
        });
    }

    setAuthPersistence = () => this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    addUser = (id, user) => this.db.collection('users').doc(id).set(user);

    getUser = id => this.db.collection('users').doc(id).get();

    //ADD ITEMS
    addItem = (id, item, collection) => this.db.collection(collection).add({...item, id}); 

    getItems = collection => this.db.collection(collection).get();

    generateId = () => this.db.collection('items').doc().id;

    addOrder = (id, details) => this.db.collection('orders').doc(id).set(details);

    
}


const firebase = new Firebase();

export default firebase;