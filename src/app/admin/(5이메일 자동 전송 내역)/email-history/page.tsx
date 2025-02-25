import Header from "./Header";
import { Table } from "./Table";

export default function EmailsHistoryPage() {
  return (
    <div className="mx-12">
      <div className="mt-20 mx-12">
        <h1 className="text-4xl font-bold mb-4">이메일 자동 전송 내역</h1>
        <Header />
        <Table />
      </div>
    </div>
  );
}
