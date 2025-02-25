import Header from "./Header";
import { Table } from "./Table";

export default function ActiveLogsPage() {
  return (
    <div className="mx-12">
      <div className="mt-20 mx-12">
        <h1 className="text-4xl font-bold mb-4">관리자 활동로그</h1>
        <Header />
        <Table />
      </div>
    </div>
  );
}
