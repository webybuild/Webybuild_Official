

function Modal(props) {

    return(
        <div className="flex justify-center items-center bg-black p-8 fixed top-0 left-0 h-screen w-screen bg-opacity-60 z-10">
            <div className="border border-black rounded-md bg-white rounded-md p-4 w-1/2">
                <div className="px-2 flex justify-end">
                    <span className="cursor-pointer font-semibold text-lg" onClick={() => props.setShowModal(false)}>x</span>
                </div>
                {
                    <props.component />
                }
            </div>
        </div>
    )
}

export default Modal;