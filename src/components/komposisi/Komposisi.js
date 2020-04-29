import React, {useEffect, useReducer} from 'react';
import KomposisiForm from './KomposisiForm';
import Filter from './Filter';
import KomposisiList from './KomposisiList';

const Komposisi = () => {
     
  const komposisiReducer = (komposisiIni, action) => {
    switch (action.type) {
      case 'ADD' :
          return { ... komposisiIni, komposisi: action.komposisi}
      default:
          return komposisiIni;
    }
  }

  const [ userKomposisi, dispatch ] = useReducer(komposisiReducer, {komposisi: []});

  useEffect(() => {
    fetchData()
  }, [])

  
  const fetchData = () => {
    fetch("https://reactlearnhook.firebaseio.com/komposisi.json")
    .then(response => response.json())
    .then(responseData => {
      const hasilDariData = []
      for(const key in responseData) {
        hasilDariData.push({ 
            id: key,
            nama: responseData[key].nama,
            jumlah: responseData[key].jumlah
        })
      }
      dispatch({type: 'ADD', komposisi: hasilDariData});
    })
  }


    return (
        <div>
            <KomposisiForm />
            <Filter />
            <KomposisiList komposisi={userKomposisi.komposisi}/>
        </div>
        
    )

}

export default Komposisi;