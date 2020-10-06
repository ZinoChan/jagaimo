import React from 'react'
import firebase from './firebase/firebase';

export default function Upload() {

    const onFileChange = async e => {
        const file = e.target.files[0]
        const storageRef = firebase.storage.ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        console.log(await fileRef.getDownloadURL());
    }

    return (
        <div>
            <h1>this is upload</h1>
            <form>
                <input type="file" onChange={onFileChange}/>
            </form>
        </div>
    )
}
