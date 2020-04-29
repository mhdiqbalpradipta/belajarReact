import React from 'react';
import Card from '../UI/Card';
import './Filter.css';

const KomposisiForm = () => {


    return (
        <section className="search">
            <Card>
            <form>
                <div className="search-input">
                    <label htmlFor="form-control">
                        Filter
                    </label>
                    <input 
                        type="text"
                        id="nama"
                        // value={}
                        onChange={
                            event => {
                                const newNama = event.target.value
                            }
                        }
                    >
                    </input>
                </div>
            </form>
            </Card>
        </section>
    )

}

export default KomposisiForm;


