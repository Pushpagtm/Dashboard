export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.product}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Product Category",
      width: 230,
    },
  
    {
      field: "number",
      headerName: "Number",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const productRows = [
    {
      id: 1,
      product: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      category: "food",
      number: 35,
    },
    {
      id: 2,
      product: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "backery",
      status: "passive",
      number: 42,
    },
    {
      id: 3,
      product: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "beverage",
      status: "pending",
      number: 45,
    },
    {
      id: 4,
      product: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "drinks",
      status: "active",
      number: 16,
    },
    {
      id: 5,
      product: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "food",
      status: "passive",
      number: 22,
    },
    {
      id: 6,
      product: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "backery",
      status: "active",
      number: 15,
    },
    {
      id: 7,
      product: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "7snow@gmail.com",
      status: "passive",
      number: 44,
    },
    {
      id: 8,
      product: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "8snow@gmail.com",
      status: "active",
      number: 36,
    },
    {
      id: 9,
      product: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "snow@gmail.com",
      status: "pending",
      number: 65,
    },
    {
      id: 10,
      product: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      category: "snow@gmail.com",
      status: "active",
      number: 65,
    },
  ];