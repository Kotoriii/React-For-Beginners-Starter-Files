import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDCE047zMWDQ9gCRovKu38cLYUMm0kJT3c",
	authDomain: "wesbos-react-b388d.firebaseapp.com",
	databaseURL: "https://wesbos-react-b388d.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export  { firebaseApp };
export default base;