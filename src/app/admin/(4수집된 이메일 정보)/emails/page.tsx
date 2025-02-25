import Header from "./Header";
import { Table } from "./Table";

export default function EmailsPage() {
  return (
    <div className="mx-12">
      <div className="mt-20 mx-12">
        <h1 className="text-4xl font-bold mb-4">수집된 이메일 목록 </h1>
        <Header />
        <Table />
      </div>
    </div>
  );
}
