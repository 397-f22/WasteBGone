import './Modal.css';
import "bootstrap/dist/css/bootstrap.min.css";

// https://codebuckets.com/2021/08/08/bootstrap-modal-dialog-in-react-without-jquery/

const Modal = ({ children, open, close }) => (
  <div
    className={`modal ${open ? 'modal-show' : ''}`}
    tabIndex="-1"
    role="dialog"
    onClick={(evt) => { if (evt.target === evt.currentTarget) close(); }}
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header  ">
          <h1 className='d-flex ' style ={{marginLeft: "33%"} }>Add Item</h1>
          <button type="button" className="btn-close" aria-label="Close"
            onClick={close}
          />
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;