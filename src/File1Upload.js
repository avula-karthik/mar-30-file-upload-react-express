import { useState } from 'react';
const File1Upload = () => {
    const [file, setfile] = useState({ preview: '', data: '' });
    const [status, setStatus] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', file.data);
        const response = await fetch('http://localhost:5000/image', {
            method: 'POST',
            body: formData,
        });
        if (response) setStatus(response.statusText);
    };

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setfile(img);
    };
    return (
        <div className='container my-5'>
            <form onSubmit={handleSubmit} className='form'>
                <h3 className='mb-2'>Select your file</h3>
                <div class='form-group'>
                    <input
                        class='form-control'
                        type='file'
                        name='file'
                        onChange={handleFileChange}
                    ></input>
                </div>
                <div className='text-center'>
                    <button class='btn btn-primary btn-block mybutton'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-folder'
                            viewBox='0 0 16 16'
                        >
                            <path d='M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z' />
                        </svg>
                        Upload
                    </button>
                </div>
            </form>

            {status && <h4>{status}</h4>}
        </div>
    );
};
export default File1Upload;
