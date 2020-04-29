import React, {useState} from 'react';
import Card from '../UI/Card';
import './Komposisi.css';

const KomposisiForm = () => {

    const [inputState, setInputState] = useState({
        nama: '', 
        jumlah: ''
    });

    const submitHandler = event => {
        event.preventDefault();

        fetch("https://reactlearnhook.firebaseio.com/komposisi.json", {
            method: 'POST',
            body: JSON.stringify(inputState),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            console.log(response.json);
        })
    }
   
    return (
        <section className="ingredient-form">
            <Card>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="form-control">
                        Nama
                    </label>
                    <input 
                        type="text"
                        id="nama"
                        value={inputState.nama}
                        onChange={
                            event => {
                                const newNama = event.target.value
                                setInputState(prevInputState => ({ 
                                    nama: newNama,
                                    jumlah: prevInputState.jumlah
                                }))
                            }
                        }
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="form-control">
                        Jumlah
                    </label>
                    <input 
                        type="text"
                        id="jumlah"
                        value={inputState.jumlah}
                        onChange={
                            event => {
                                const newJumlah = event.target.value
                                setInputState(prevInputState => ({
                                    nama: prevInputState.nama,
                                    jumlah: newJumlah
                                }))
                            }
                        }
                    >
                    </input>
                </div>
                <div className="ingredient-form__actions">
                    <button type="submit">Tambah</button>
                </div>
            </form>
            </Card>
        </section>
    )

}

export default KomposisiForm;


