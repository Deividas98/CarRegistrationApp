import Recordform from "./Recordform";
import React, { useState, useEffect } from 'react';
import firebaseDb from "../firebase";
import { Component } from 'react';
import Modal from './modal.js';


const Records = () => {


    let [recordObjects, setRecordObjects] = useState({})
    let [currentId, setCurrentId] = useState('')
    useEffect(() => {
        firebaseDb.child('records').on('value', snapshot => {
            if (snapshot.val() != null) {
                setRecordObjects({
                    ...snapshot.val()
                })
            }
            else
                setRecordObjects({})
        })
    }, [])

    const addOrEdit = obj => {
        if (currentId == '')
            firebaseDb.child('records').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
            firebaseDb.child(`records/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Do you want to delete this record?')) {
            firebaseDb.child(`records/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

    let internalId = '';

    return (
        <>
            <div>
                <div>
                    <Recordform {...({ addOrEdit, currentId, recordObjects })} />
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Plates</th>
                                <th>Full Name</th>
                                <th>Settings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 Object.keys(recordObjects).map(id => {
                                    return <tr key={id}>
                                        <td className="Input-field">{recordObjects[id].plates}</td>
                                        <td className="User-name">{recordObjects[id].fullName}</td>
                                        <td>
                                            <button className="Edit-record-button" onClick={() => { setCurrentId(id) }}>Edit</button>
                                            <button className="Delete-record-button" onClick={() => { onDelete(id) }}>Delete</button>
                                        </td>
                                        {/*internalId = recordObjects[id].plates*/}
                                        {console.log(id ,recordObjects[id], recordObjects[id].plates, recordObjects[id].fullName)}
                                    </tr>
                                }).sort(function(a ,b){//unfinished sorting
                                    if (a.internalId > b.internalId) {
                                        return 1;
                                      }
                                      if (a.internalId < b.internalId) {
                                        return -1;
                                      }
                                      return 0;
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );

   

}

export default Records;