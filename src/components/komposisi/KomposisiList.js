import React from 'react';
import './KomposisiList.css';

const KomposisiList = (props) => {
    
  console.log("ini data dari load komposisi list: " + JSON.stringify(props.komposisi))

        return (
          <section className="ingredient-list">
            <h2>Loaded Komposisi</h2>
            <ul>
              {props.komposisi.map(data => (
                <li key={data.id}>
                    <span>{data.nama}</span>
                    <span>{data.jumlah}</span>
                </li>
              ))}
            </ul>
          </section>
        );
};
export default KomposisiList;