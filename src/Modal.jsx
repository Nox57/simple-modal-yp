import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

/**
 * Modal component that displays a modal window with content.
 *
 * @component
 * @example
 * const handleClose = () => console.log('Modal closed');
 * 
 * <Modal isOpen={true} onClose={handleClose}>
 *     <h1>Modal title</h1>  
 *     <p>Modal content</p>
 * </Modal>
 * 
 */
export default function Modal({
    isOpen,
    onClose,
    children,
    className,
    closeOnOverlayClick,
    width,
    closeButtonText,
}) {
    const modalRef = useRef()

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.body.style.overflow = 'hidden'
            document.addEventListener('keydown', handleEscape)
            modalRef.current.focus()
        }

        return () => {
            document.body.style.overflow = 'visible'
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const handleCloseOnOverlay = (e) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose()
        }
    }

    return (
        <div
            className={`modal-overlay ${className}`}
            onClick={handleCloseOnOverlay}
            ref={modalRef}
            tabIndex={-1}
        >
            <div className="modal-content" style={{ width: width }}>
                {children}
                <button className="modal-close" onClick={onClose}>
                    {closeButtonText || 'Close'}
                </button>
            </div>
        </div>
    )
}


/**
 * The prop types for the modal component.
 *
 * @name Modal.propTypes
 * @type {object}
 * @property {boolean} isOpen - Indicates if the modal is open.
 * @property {function} onClose - The function to call when the modal needs to be closed.
 * @property {node} children - The child elements to display within the modal.
 * @property {string} className - Additional CSS classes to apply to the modal.
 * @property {boolean} closeOnOverlayClick - Indicates if a click on the overlay should close the modal.
 * @property {string} width - The width of the modal.
 * @property {string} closeButtonText - The text for the close button.
 */
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    closeOnOverlayClick: PropTypes.bool,
    width: PropTypes.string,
    closeButtonText: PropTypes.string,
}

/**
 * The default values for the props of the modal component.
 *
 * @name Modal.defaultProps
 * @type {object}
 */
Modal.defaultProps = {
    className: '',
    closeOnOverlayClick: true,
    width: '500px',
    closeButtonText: 'Close',
}
