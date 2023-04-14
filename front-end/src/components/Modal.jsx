import { ModalBackground } from "./modal-style";

export function Modal({ closeModal }) {
    return(
        <ModalBackground>
            <div className="modal-container">
                <button onClick={() => closeModal(false)}>X</button>
                <p>Texto com todos os termos de uso aqui, não temos ainda mas em breve vai ta aqui.</p>
            </div>
        </ModalBackground>
    );
}
