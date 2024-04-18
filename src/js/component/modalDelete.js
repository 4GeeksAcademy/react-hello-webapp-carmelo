import React,{useContext} from "react";
import { Context } from "../store/appContext";
export const ModalDelete = (props) => {
  const { show, onClose, deleteContact } = props;
  const {store,actions} = useContext(Context);

  const handleYesClick = () =>{
    actions.deleteContact(store.contactToDelete.id);
    onClose();
  }

  return (
    <div className="modal" tabIndex="-1" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Contact</h5>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete the contact?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>No</button>
            <button type="button" className="btn btn-primary" onClick={ handleYesClick}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
