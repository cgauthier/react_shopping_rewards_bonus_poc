import React, {useState, useEffect} from "react";
import './App.css';
import Header from './Header';
import Title from './Title';
import Products from './Products';

const global = {
  urlPrefix: "http://localhost:3001/db"
};

export const App = () => {
  const [data, setData] = useState(null);
  // SHOULD USE USEQUERY
  useEffect(() => {
    const load = async() => {
      
      let url = global.urlPrefix;
      let data = await(await fetch(url)).json();

      // processing data
      // 1) sort the data by date in descencing order and by invoice number
      // 2) attached products list info to invoice
      // 3) calculate subtotal per invoice item
      // 4) calculate total per invoice
      // 5) calculate points based on rules   

      let fixedData = (data) => {
        let invoices = data.db.products.invoices;
        let invoicesClone = [...invoices];
        let compareFn = (a, b) => {
          if(a.date === b.date) {
            return b.invoiceNo - a.invoiceNo;
          }
          return a.date < b.date ? 1 : -1;
        }
        
        invoicesClone.sort(compareFn);

        data.db.products.invoices = invoicesClone.map(function(invoice) {
           let data = this;
           let list = data.db.products.list;
           let items = invoice.items;
           items = items.map(function(item) {
              let list = this;
              let foundItem = list.filter(function(listItem) {
                return listItem.id === this.id;
              }.bind(item));
              let obj = {
                ...item,
                ...foundItem[0]
              }
              obj.subtotal = obj.price * obj.qty;
              return obj;
           }.bind(list));
           invoice.items = [...items];
           if(invoice.items.length > 1) {
            invoice.total = items.reduce((item, a) => item.subtotal + a.subtotal);
           } else {
            invoice.total = invoice.items[0].subtotal;
           }

           invoice.points = null;

           /*
            There are no points awarded for total transaction of less than $100.
            2 points per dollar is awarded for total transaction above $100.
            1 point per dollar is awarded for total transaction between $50 and $100.
           */

           if(invoice.total >= 100) {
              let total = invoice.total;
              let rewards = data.db.appConfig.rewards;
              let mainBonusValue = rewards.mainbonus.value;
              let mainBonusMulti = rewards.mainbonus.multiplier;
              let addedBonusValue = rewards.addedbonus.value;
              let addedBonusMulti = rewards.addedbonus.multiplier;
              let points = (total - mainBonusValue) * mainBonusMulti;
              let addedPoints = (mainBonusValue - addedBonusValue) * addedBonusMulti;
              points = points + addedPoints;
              invoice.points = points;
           }
           return invoice;
          
        }.bind(data));

        return data;
      }
      let processedData = fixedData(data);
      setData(processedData.db);
    }
    load();
  }, []);

  return (
    <div className="App">

      { 
        data 
        ? 
        <>
          <Header user={data.user} />
          <Title appConfig={data.appConfig} />
          <Products products={data.products} />
        </>
        :
        null
      }

    </div>
  );
}

export default App;
