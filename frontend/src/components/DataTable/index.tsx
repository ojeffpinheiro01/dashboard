import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

function DataTable() {
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
      .then((res) => { setPage(res.data); });
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
    <Pagination page={page} onChangePage={changePage} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Client</th>
              <th>Visits</th>
              <th>Trainings</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map(i => (
              <tr key={i.id}>
                <td>{formatLocalDate(i.date, "dd//MM/yyyy")}</td>
                <td>{i.seller.name}</td>
                <td>{i.visited}</td>
                <td>{i.deals}</td>
                <td>{i.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;