import React from 'react';
// function NumberList(props){
//    const numberList = this.props.list;
//    const list = numberList.map(data =>{
//    <li>{data}</li>
//    });
//    return (
//    <ul>{list}</ul>
//    );
// }
function List(props){
return <li>{props.value}</li>
}

function NumberList(props){
  const numberListe = props.list;
  const dataList = numberListe.map((data)=>
      <List key={data.toString()} value={data}/>
  );
  return (
      <ul>
          {
            dataList
          }
      </ul>
  );
}
export default NumberList;