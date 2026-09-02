const Firms = () => {
  fetch('http://localhost:3000/firms')
    .then((response) => response.json())
    .then((data) => console.log(data)); 
    
  return (
    <div>
      <h1>Firms</h1>
      <table>
        <thead>
          <tr>
            <th>Firm Name</th>
            <th>Contact Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>   
        </tbody>
      </table>      
    </div>
  );
};

export default Firms;