import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { DataTable } from '../components/DataTables/Index';
import { getCheckColumns, getComplexColumns, getDevelopmentColumns, getFourColumns } from '../components/DataTables/Columns';
import tableDataDevelopment, { developmentType } from '../data/development';
import tableDataComplex, { complexType } from '../data/complex';
import fourColumnDataComplex, { fourColumnType } from '../data/four-column';
import tableDataCheck, { checkType } from '../data/check';

function DataTablePage() {
  const [developmentData, setDevelopmentData] = useState<developmentType[]>([]);
  const [complexData, setComplexData] = useState<complexType[]>([]);
  const [fourColumnData, setFourColumnData] = useState<fourColumnType[]>([]);
  const [CheckData, setCheckData] = useState<checkType[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setDevelopmentData(tableDataDevelopment.filter((data) => data.name.toLowerCase().includes(search.toLowerCase())));
    setComplexData(tableDataComplex.filter((data) => data.name.toLowerCase().includes(search.toLowerCase())));
    setFourColumnData(fourColumnDataComplex.filter((data) => data.name.toLowerCase().includes(search.toLowerCase())));
    setCheckData(tableDataCheck.filter((data) => data.name.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  const handleDelete = (idx: number, data: any[], setData: React.Dispatch<React.SetStateAction<any[]>>) => {
    const newData = data.filter((_, index) => index !== idx);
    setData(newData);
  };

  const handleAddData = (newData: any, variant: string) => {
    if (variant === 'complex') {
      setComplexData([...complexData, newData]);
    } else if (variant === 'development') {
      setDevelopmentData([...developmentData, newData]);
    } else if (variant === 'fourColumn') {
      setFourColumnData([...fourColumnData, newData]);
    } else if (variant === 'check') {
      setCheckData([...CheckData, newData]);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Layout title="Data Tables" breadcrumb="Pages / Data Tables" onSearch={handleSearch}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DataTable
          title="Development"
          variant="development"
          data={developmentData}
          columns={getDevelopmentColumns((idx) => handleDelete(idx, developmentData, setDevelopmentData))}
          onAddData={handleAddData}
        />
        <DataTable
          title="Check Table"
          variant="check"
          data={CheckData}
          columns={getCheckColumns((idx) => handleDelete(idx, CheckData, setCheckData))}
          onAddData={handleAddData}
        />
        <DataTable
          title="4-Column Table"
          variant="fourColumn"
          data={fourColumnData}
          columns={getFourColumns((idx) => handleDelete(idx, fourColumnData, setFourColumnData))}
          onAddData={handleAddData}
        />
        <DataTable
          title="Complex Table"
          variant="complex"
          data={complexData}
          columns={getComplexColumns((idx) => handleDelete(idx, complexData, setComplexData))}
          onAddData={handleAddData}
        />
      </div>
    </Layout>
  );
}

export default DataTablePage;