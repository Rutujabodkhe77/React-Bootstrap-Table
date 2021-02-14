
import {Table} from 'react-bootstrap';
import './Style.css';

function App()
{
  return(

    <div className="main_div">
      <h1> This is React-BootStap Table</h1>

      <Table variant="dark" size="sm" striped bordered hover>
        <tr>
          <th>Sr. No.</th>
          <th>User Name</th>
          <th>User Mobile</th>
          <th>User Age</th>
        </tr>

        <tr>
          <td>1.</td>
          <td>Rutuja</td>
          <td>7896777576</td>
          <td>21</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Tanuja</td>
          <td>8765732893</td>
          <td>17</td>
        </tr>
      </Table>
    </div>
  );
}
export default App;


