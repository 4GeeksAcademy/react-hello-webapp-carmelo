import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";
import { ModalDelete } from "../component/modalDelete.js";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        setShowModal(true); 
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    useEffect(() => {
        actions.getAllDiarys();
        actions.getAllContacts();
    }, []);

    console.log(store.contacts);



    return (
        <div className="cartas rounded-1 mx-4 border-bottom">
            {store.contacts.map((item) => {
                return (
                    <div className="p-3 border d-flex justify-content-between mx-4" key={item.id}>
                        <div>
                            <Card
                                image={"https://picsum.photos/id/237/200/200"}
                                fullName={item.full_name}
                                address={item.address}
                                phone={item.phone}
                                email={item.email}
                            />
                        </div>
                        <div className="d-flex align-items-center">
                            <span><i className="fas fa-pen m-3"></i></span>
                            <span onClick={handleDelete}><i className="fas fa-trash"></i></span>
                        </div>
                    </div>
                );
            })}
           {showModal && <ModalDelete show={showModal} onClose={handleCloseModal}  deleteContact={actions.deleteContact}/>}
        </div>
    );
};


