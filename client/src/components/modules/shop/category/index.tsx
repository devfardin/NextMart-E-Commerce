import { NMTable } from "@/components/ui/core/NMTable"
import CreateCategoryModal from "./CreateCategoryModal"
import { ICategory } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

type TCategoriesProps = {
  categories: ICategory[]
}[]
const ManageCategory = async ({categories}: {categories: TCategoriesProps[]}) => {
  const columns: ColumnDef<TCategoriesProps>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
  ]
  return (
    <div>
        <div className="flex items-center justify-between gap-5 py-3 px-4 border rounded">
        <h1 className="text-xl font-medium text-neutral-600">Manage Category</h1>      
        <CreateCategoryModal/>
        </div>
        <div className="mt-5">
          <NMTable data={categories} columns={columns}/>
        </div>
    </div>
  )
}

export default ManageCategory
