import { useMoralisQuery } from "react-moralis";

export function TransactionList()
{
  const { data, error, isLoading } = useMoralisQuery(
    "EthTransactions",
    query =>
      query

      ,
    {
      live: true,
    },
  );
  const getAll=()=>{    
  for (let i = 0; i < data.length; i++) {
    const object = data[i];
    console.log(object.get('hash') + ' - ' + object.get('from_address') +' - '+ object.get('to_address')  +' - '+ object.get('createdAt')  +' - '+ object.get('gas_price')  );
    }
  }

    return(
      <div>
          <button onClick={getAll}>Show Transaction list </button>
      </div>
    )
}

 export default TransactionList;


