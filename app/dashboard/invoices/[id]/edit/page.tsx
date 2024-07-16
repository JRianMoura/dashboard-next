import Form from "@/app/ui/invoices/edit-form"
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs"
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data"
import { notFound } from "next/navigation"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editar Faturas',
};

const page = async ({params}:{params: {id: string} }) => {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs breadcrumbs={[
        { label: 'Invoices', href: '/dashboard/invoices' },
        {
          label: 'Editar Faturas', href: `/dashboard/invoices/${id}/edit`,
      active: true  }
      ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  )
}

export default page
